import { db } from "@/db";
import { articlesTable, inventory, topicsTable } from "@/db/schema";
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
                    createdAt: new Date(report.createdAt || new Date()),
                }))
            )
            .flat()
    );
}

async function fillInventoryData() {}

async function fillDemoData() {
    // Drop database
    await db.delete(articlesTable);
    await db.delete(topicsTable);
    await db.delete(inventory);
    await Promise.all([fillNewsData()]);
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
