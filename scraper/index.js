import puppeteer from "puppeteer";

console.log(new Date().toISOString() + " Running import");

const consentButtonSelector = 'button[aria-label="Alle akzeptieren"]';
const moreButtonSelector = 'a[aria-label="Mehr zum Thema"]';
const topicContainerSelector = 'c-wiz:has(> div > article)'

const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
});
const page = await browser.newPage();
const newsJson = [];

while (true) {
    try {
        await page.goto(
            "https://news.google.com/topics/CAAqIAgKIhpDQkFTRFFvSEwyMHZNR2czZUJJQ1pHVW9BQVAB?hl=de&gl=AT&ceid=AT%3Ade"
        );
        break;
    } catch (e) {
        console.warn(e.message);
    }
}

await page.setViewport({ width: 1080, height: 1024 });

await page.waitForSelector(consentButtonSelector);
await page.click(consentButtonSelector);

await page.waitForNavigation();

await page.waitForSelector(moreButtonSelector);

const topicContainers = await page.$$(topicContainerSelector);

let newsAwaiter = [];

for (let topicContainer of topicContainers) {
    let image;
    try {   
        const titleImage = await topicContainer.$eval("figure > img", el => el?.src);
        while (titleImage && true) {
            try {
                const imageBuffer = await (await fetch(titleImage)).arrayBuffer();
                image = btoa(
                    String.fromCharCode(...new Uint8Array(imageBuffer))
                );
                break;
            } catch (e) {
                console.warn(e.message);
            }
        }
    } catch (e) {
        console.warn(e.message);
    }
    const button = await topicContainer.$(moreButtonSelector);
    const href = await button.getProperty("href");
    const link = await href.jsonValue();

    newsAwaiter.push(fetchNews(link, image));
}

async function fetchNews(link, topicImage) {
    const articleSelector = "article";
    const reports = [];
    const page = await browser.newPage();
    while (true) {
        try {
            await page.goto(link);
            break;
        } catch (e) {
            console.warn(e.message);
        }
    }

    await page.waitForSelector(articleSelector);

    const articles = await page.$$(articleSelector);

    for (let article of articles) {
        const source = await article.$eval("div > img", (el) => el.src);
        let imageBuffer;
        while (true) {
            try {
                imageBuffer = await (await fetch(source)).arrayBuffer();
                break;
            } catch (e) {
                console.warn(e.message);
            }
        }
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

    const title = await page.$eval(
        "title",
        (el) => el.innerText.split(" - ")[1]
    );

    newsJson.push({
        reports,
        topic: title == "Übersicht" ? reports[0].title : title,
        topicImage
    });
    await page.close();
}

await Promise.all(newsAwaiter);

const outUrl = process.env.ENDPOINT || "http://localhost:4321/api/microservices/articles";
const auth = process.env.ARTICLES_SERVICE_TOKEN;
//fs.writeFileSync("./news.json", JSON.stringify(newsJson));

await browser.close();

await fetch(outUrl, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth,
    },
    body: JSON.stringify(newsJson),
});

console.log(new Date().toISOString() + " Finished import");
