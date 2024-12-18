import type { APIRoute } from "astro"

export const GET: APIRoute = () => {
    return new Response(null, {
        headers: {
            location: "/home"
        },
        status: 302
    });
}