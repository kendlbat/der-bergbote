import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import type React from "react";

export const InventoryHover: React.FC<{
    children: any,
    coin: any,
    item: Record<string, any>
}> = (props) => {

    return <HoverCard>
        <HoverCardTrigger>
            {props.children}
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                    <p className="text-sm">
                        {props.item.description}
                    </p>
                    <div className="flex items-center pt-2">
                        <span className="text-xs text-muted-foreground">
                            {props.coin}
                        </span>
                    </div>
                </div>
            </div>
        </HoverCardContent>
    </HoverCard>;
}