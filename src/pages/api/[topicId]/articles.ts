import { db } from "@/db";
import { articlesTable, topicsTable } from "@/db/schema";
import type { APIRoute } from "astro";
import { sql } from "drizzle-orm";
import etag from "etag";

export const GET: APIRoute = async ({ request, params }) => {
    const articles = JSON.stringify(
        await db
            .select()
            .from(articlesTable)
            .where(sql`${articlesTable.topic} = ${params.topicId}`)
    );

    const et = etag(articles);

    if (request.headers.get("If-None-Match") === et)
        return new Response(null, {
            headers: {
                etag: et,
            },
            status: 304,
        });

    return new Response(articles, {
        headers: {
            etag: et,
        },
    });
};
