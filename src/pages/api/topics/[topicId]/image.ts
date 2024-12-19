import { db } from "@/db";
import { topicsTable } from "@/db/schema";
import type { APIRoute } from "astro";
import { sql } from "drizzle-orm";
import etag from "etag";

export const GET: APIRoute = async ({ request, params }) => {
    const inm = request.headers.get("If-None-Match");

    const topic = (
        await db
            .select({
                topicImage: topicsTable.topicImage,
                name: topicsTable.name,
            })
            .from(topicsTable)
            .where(sql`${topicsTable.id} = ${params.topicId}`)
    )[0];

    const et = etag(topic.name || "");

    if (topic.name && inm == et)
        return new Response(null, {
            headers: {
                etag: et,
            },
            status: 304,
        });
    let imageBlob: Blob | undefined = undefined;

    try {
        imageBlob = await fetch(
            "data:image/png;base64," + topic.topicImage
        ).then((r) => r.blob());
    } catch (e) {}

    if (!topic.topicImage || !imageBlob)
        return new Response(null, { status: 404 });

    return new Response(await imageBlob.arrayBuffer(), {
        headers: {
            "content-type": "image/png",
            etag: et,
        },
    });
};
