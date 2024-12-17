import { db } from "@/db";
import { articlesTable, topicsTable } from "@/db/schema";
import fs from "fs/promises";

async function fillNewsData() {
    const input = JSON.parse(await fs.readFile("./news.json", "utf8"));

    const topicIds = await db
        .insert(topicsTable)
        .values(input.map(({ topic }) => ({ name: topic })))
        .returning({ id: topicsTable.id });

    await db.insert(articlesTable).values(
        input
            .map(({ reports }, idx) =>
                reports.map((report) => ({
                    topic: topicIds[idx].id,
                    source: report.source,
                    title: report.title,
                    articleLink: report.articleLink,
                    createdAt: new Date(report.createdAt),
                }))
            )
            .flat()
    );
}

async function fillDemoData() {
    // Drop database
    await db.delete(articlesTable);
    await db.delete(topicsTable);
    await Promise.all([fillNewsData()]);
}

fillDemoData()
    .then(() => {
        console.log("Demo data filled");
    })
    .catch((error) => {
        console.error("Error filling demo data", error);
    });
