import { db } from "@/db";
import { equipped } from "@/db/schema";
import { items } from "@/gambling/items";
import type { APIRoute } from "astro";
import { getSession } from "auth-astro/server";
import { and, eq } from "drizzle-orm";

export const POST: APIRoute = async ({ params, request }) => {
    const { itemid } = params;
    const session = await getSession(request);
    const user = session?.user?.email;

    if (!user) return new Response("Unauthorized", { status: 401 });

    const item = items[itemid || ""];

    if (!item) return new Response("Not Found", { status: 404 });

    await db
        .delete(equipped)
        .where(and(eq(equipped.user, user), eq(equipped.slot, item.type)));

    return new Response("OK", { status: 200 });
};
