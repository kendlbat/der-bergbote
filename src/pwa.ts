import { registerSW } from "virtual:pwa-register";

try {
    await registerSW({
        immediate: true,
        onRegisteredSW(swScriptUrl: string) {
            console.log("SW registered: ", swScriptUrl);
        },
        onOfflineReady() {
            console.log("PWA application ready to work offline");
        },
    });
} catch (e) {
    console.error(e);
}
