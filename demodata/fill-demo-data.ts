import { db } from "@/db";
import {
    articlesTable,
    balance,
    equipped,
    inventory,
    topicsTable,
} from "@/db/schema";
import fs from "fs/promises";

type TopicInsert = typeof topicsTable.$inferInsert;
type ArticleInsert = typeof articlesTable.$inferInsert;

async function fillNewsData() {
    const input = JSON.parse(await fs.readFile("./news.json", "utf8")) as [
        {
            reports: Array<ArticleInsert>;
            topic: string;
            topicImage: string;
        }
    ];

    const topicIds = await db
        .insert(topicsTable)
        .values(
            input.map(({ topic, topicImage }) => ({
                name: topic,
                topicImage,
            }))
        )
        .returning({ id: topicsTable.id });

    await db.insert(articlesTable).values(
        input
            .map(({ reports }, idx) =>
                reports.map((report) => ({
                    topic: topicIds[idx].id,
                    source: report.source,
                    title: report.title,
                    articleLink: report.articleLink,
                    article: report.article ?? "",
                    alignment: report.alignment,
                    createdAt: new Date(report.createdAt || new Date()),
                    questions: report.questions,
                }))
            )
            .flat()
    );
}

async function fillInventoryData() {
    const bals = JSON.parse(await fs.readFile("./balance.json", "utf-8"));
    await db.insert(balance).values(bals);
    const inv = JSON.parse(await fs.readFile("./inventory.json", "utf-8"));
    await db.insert(inventory).values(inv);
    const equ = JSON.parse(await fs.readFile("./equipped.json", "utf-8"));
    await db.insert(equipped).values(equ);
}

async function fillDemoData() {
    // Drop database
    await db.delete(articlesTable);
    await db.delete(topicsTable);
    await db.delete(balance);
    await db.delete(inventory);
    await db.delete(equipped);
    await Promise.all([fillNewsData(), fillInventoryData()]);
}

fillDemoData()
    .then(() => {
        console.log("Demo data filled");
        process.exit(0);
    })
    .catch((error) => {
        console.error("Error filling demo data", error);
        process.exit(1);
    });
