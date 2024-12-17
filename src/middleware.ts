import { defineMiddleware, sequence } from "astro:middleware";
import { getSession } from "auth-astro/server";

const example = defineMiddleware(async (context, next) => {
    const response = await next();
    return response;
});

export const onRequest = sequence(example);
