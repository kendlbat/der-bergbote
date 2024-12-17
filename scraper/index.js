import puppeteer from "puppeteer";
import fs from "fs";

const consentButtonSelector = 'button[aria-label="Alle akzeptieren"]';
const moreButtonSelector = 'a[aria-label="Mehr zum Thema"]';

const browser = await puppeteer.launch({
    headless: false,
});
const page = await browser.newPage();
const newsJson = [];

await page.goto(
    "https://news.google.com/topics/CAAqIAgKIhpDQkFTRFFvSEwyMHZNR2czZUJJQ1pHVW9BQVAB?hl=de&gl=AT&ceid=AT%3Ade"
);

await page.setViewport({ width: 1080, height: 1024 });

await page.waitForSelector(consentButtonSelector);
await page.click(consentButtonSelector);

await page.waitForNavigation();

await page.waitForSelector(moreButtonSelector);

const buttons = await page.$$(moreButtonSelector);

let newsAwaiter = [];

for (let button of buttons) {
    const href = await button.getProperty("href");
    const link = await href.jsonValue();

    newsAwaiter.push(fetchNews(link));
}

async function fetchNews(link) {
    const articleSelector = "article";
    const reports = [];
    const page = await browser.newPage();
    await page.goto(link);

    await page.waitForSelector(articleSelector);

    const articles = await page.$$(articleSelector);

    for (let article of articles) {
        const source = await article.$eval("div > img", (el) => el.src);
        const imageBuffer = await (await fetch(source)).arrayBuffer();
        const sourceImg = btoa(
            String.fromCharCode(...new Uint8Array(imageBuffer))
        );
        const title = await article.$eval("h4 > a", (el) => el.innerText);
        const articleLink = await article.$eval("a", (el) => el.href);
        const createdAt = await article.$eval(
            "div:nth-of-type(2) > div > time",
            (el) => el.dateTime
        );
        reports.push({ source: sourceImg, title, articleLink, createdAt });
    }

    newsJson.push(reports);
    await page.close();
}

await Promise.all(newsAwaiter);

const outUrl = process.env.ENDPOINT;
const auth = process.env.AUTHORIZATION;
// fs.writeFileSync("./news.json", JSON.stringify(newsJson));

await browser.close();

await fetch(outUrl, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: auth,
    },
    body: JSON.stringify(newsJson),
});
