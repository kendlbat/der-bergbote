import { db } from "@/db";
import { balance } from "@/db/schema";
import type { APIRoute } from "astro";
import { getSession } from "auth-astro/server";
import { eq, sql } from "drizzle-orm";

export const POST: APIRoute = async ({ request, params, cookies }) => {
    const session = await getSession(request);
    if (!session?.user?.email) {
        return new Response("Unauthorized", { status: 401 });
    }

    const user = params.userId;

    if (session.user.email != user) {
        return new Response("Forbidden", { status: 403 });
    }

    let userBalance =
        (
            await db
                .select()
                .from(balance)
                .where(sql`${balance.user} = ${user}`)
        )[0]?.amount || -1;

    if (userBalance === -1) {
        await db.insert(balance).values({
            user,
            amount: 0,
        });
        userBalance = 0;
    }

    const input = (await request.json()) as { amount: number };

    const amount = userBalance + input.amount;

    await db
        .update(balance)
        .set({ amount: amount })
        .where(sql`${balance.user} = ${user}`);

    return new Response(
        JSON.stringify({ amount, user, name: session?.user?.name || "" }),
        {
            status: 200,
        }
    );
};
