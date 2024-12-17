// @ts-check
import { defineConfig } from "astro/config";
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

    adapter: node({
        mode: "standalone",
    }),
    output: "server",
});
