import { db } from "@/db";
import { articlesTable, topicsTable } from "@/db/schema";
import type { APIRoute } from "astro";
import { ARTICLES_SERVICE_TOKEN } from "astro:env/server";

export const POST: APIRoute = async ({ request }) => {
    const token = request.headers.get("Authorization");
    if (token !== "Bearer " + ARTICLES_SERVICE_TOKEN) {
        return new Response("Unauthorized", { status: 401 });
    }
    const input = (await request.json()) as [
        {
            topic: string;
            reports: [
                {
                    source: string;
                    title: string;
                    articleLink: string;
                    createdAt: string;
                }
            ];
        }
    ];

    await db.delete(articlesTable);
    await db.delete(topicsTable);

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
    return new Response("OK");
};
