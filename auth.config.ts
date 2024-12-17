import Entra from "@auth/core/providers/microsoft-entra-id";
import { defineConfig } from "auth-astro";

export default defineConfig({
    providers: [
        Entra({
            clientId: import.meta.env.ENTRA_CLIENT_ID,
            clientSecret: import.meta.env.ENTRA_CLIENT_SECRET,
            issuer: import.meta.env.ENTRA_ISSUER,
        }),
    ],
});
