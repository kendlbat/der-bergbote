import { db } from "@/db";
import { articlesTable } from "@/db/schema";
import type { APIRoute } from "astro";
import { ARTICLES_SERVICE_TOKEN } from "astro:env/server";

export const POST: APIRoute = async ({ request }) => {
    const token = request.headers.get("Authorization");
    if (token !== "Bearer " + ARTICLES_SERVICE_TOKEN) {
        return new Response("Unauthorized", { status: 401 });
    }

    const input = (await request.json()) as [
        {
            source: string;
            title: string;
            articleLink: string;
            createdAt: string;
        }
    ];

    console.log(input);

    await db.insert(articlesTable).values(...input);
    return new Response("OK");
};
