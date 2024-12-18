import { db } from "@/db";
import { topicsTable } from "@/db/schema";
import type { APIRoute } from "astro";
import etag from "etag";

export const GET: APIRoute = async ({ request }) => {
    const topics = JSON.stringify(await db.select().from(topicsTable));
    const et = etag(topics);

    if (request.headers.get("If-Match") === et)
        return new Response(null, {
            headers: {
                etag: et,
            },
            status: 304,
        });

    return new Response(topics, {
        headers: {
            etag: et,
        },
    });
};
