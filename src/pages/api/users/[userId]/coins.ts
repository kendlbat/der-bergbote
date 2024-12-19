import { db } from "@/db";
import { balance } from "@/db/schema";
import type { APIRoute } from "astro";
import { getSession } from "auth-astro/server";
import { eq, sql } from "drizzle-orm";

export const POST: APIRoute = async ({request, params, cookies}) => {
    const session = await getSession(request);
    if (!session?.user?.email) {
        return new Response("Unauthorized", {status: 401});
    }

    const user = params.userId;

    if (session.user.email != user) {
        return new Response("Forbidden", {status: 403});
    }

    const userBalance = await db.select().from(balance).where(sql`${balance.user} = ${user}`);
    if (userBalance.length != 1) {
        return new Response("Not found", { status: 404});
    }

    const input = (await request.json()) as { amount: number };

    const amount = userBalance[0].amount + input.amount;

    await db.update(balance).set({ amount: amount }).where(sql`${balance.user} = ${user}`);

    return new Response(JSON.stringify({ ...userBalance[0], amount}), {status: 200})
}