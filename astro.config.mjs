// @ts-check
import { defineConfig, envField } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import AstroPWA from "@vite-pwa/astro";

import auth from "auth-astro";
import { manifest } from "./manifest";

// https://astro.build/config
export default defineConfig({
    integrations: [
        AstroPWA({
            manifest,
        }),
        react(),
        tailwind({
            applyBaseStyles: false,
        }),
        auth(),
    ],
    env: {
        schema: {
            ARTICLES_SERVICE_TOKEN: envField.string({
                context: "server",
                access: "secret",
            }),
        },
    },

    adapter: node({
        mode: "standalone",
    }),
    output: "server",
});
