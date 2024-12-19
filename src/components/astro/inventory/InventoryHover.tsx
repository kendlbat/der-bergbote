import { ReactBergBalance } from "@/components/react/react-balance";
import {
    HoverCard,
    HoverCardTrigger,
    HoverCardContent,
} from "@/components/ui/hover-card";
import { items } from "@/gambling/items";
import type React from "react";

export const InventoryHover: React.FC<{
    children: any;
    coin: any;
    item: Record<string, any>;
}> = (props) => {
    const it = items[props.item.item];
    return (
        <HoverCard>
            <HoverCardTrigger>{props.children}</HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                        <h3 className="text-lg">{it.name}</h3>
                        <p className="text-sm">{it.description}</p>
                        <div className="flex items-center pt-2">
                            <span className="text-xs text-muted-foreground">
                                <ReactBergBalance
                                    amount={it.value}
                                    coin={props.coin}
                                    className="text-[0.5em]"
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
};
