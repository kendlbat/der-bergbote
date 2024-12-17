import { db } from "@/db";
import { articlesTable } from "@/db/schema";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
    const articles = await db.select().from(articlesTable);

    console.log(articles);

    return new Response(JSON.stringify(articles), {
        headers: {
            "content-type": "application/json",
        },
    });
};
