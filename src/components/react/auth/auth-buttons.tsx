import { Button } from "@/components/ui/button";
import { signIn, signOut } from "auth-astro/client";
import { useState } from "react";

export const SignIn: React.FC = () => {
    const [loading, setLoading] = useState(false);
    return (
        <Button
            disabled={loading}
            className="w-full"
            onClick={async () => {
                setLoading(true);
                await signIn("microsoft-entra-id");
                setLoading(false);
            }}
        >
            Anmelden
        </Button>
    );
};

export const SignOut: React.FC = () => {
    const [loading, setLoading] = useState(false);
    return (
        <Button
            disabled={loading}
            onClick={async () => {
                setLoading(true);
                await signOut();
                setLoading(false);
            }}
        >
            Abmelden
        </Button>
    );
};
