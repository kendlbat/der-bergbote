import { tryRedeem } from "@/gambling/vouchers";
import type { APIRoute } from "astro";
import { getSession } from "auth-astro/server";

export const POST: APIRoute = async ({ request, params }) => {
    const session = await getSession(request);
    const user = session?.user?.email;

    if (!user) return new Response("Unauthorized", { status: 401 });

    const value = await tryRedeem(params.id || "", user);

    return new Response(
        JSON.stringify({
            value: value ?? 0,
            type: typeof value === "number" ? "coins" : "item",
        }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" },
        }
    );
};
