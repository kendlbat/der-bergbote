import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard } from "@/components/ui/hover-card";
import type { Session } from "@auth/core/types";
import { HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";

export const ClientUserAvatar: React.FC<{ session: Session | null }> = ({
    session,
}) => (
    <Avatar>
        {session?.user?.image && (
            <AvatarImage src={session.user.image} alt="Avatar"></AvatarImage>
        )}
        <AvatarFallback>
            {session?.user?.name
                ? session.user.name
                      .split(" ")
                      .map((s) => s.charAt(0))
                      .join("")
                : "?"}
        </AvatarFallback>
    </Avatar>
);
