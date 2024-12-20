import { RarityTag } from "@/components/react/rarity-tag";
import { ReactBergBalance } from "@/components/react/react-balance";
import {
    HoverCard,
    HoverCardTrigger,
    HoverCardContent,
} from "@/components/ui/hover-card";
import { Rarity } from "@/gambling/enums";
import { items } from "@/gambling/items";
import type React from "react";

export const InventoryHover: React.FC<{
    children: any;
    coin: any;
    item?: Record<string, any>;
}> = (props) => {
    const it = props.item ? items[props.item.item] : null;
    return (
        <HoverCard>
            <HoverCardTrigger>{props.children}</HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between w-full space-x-4">
                    <div className="space-y-1 w-full">
                        <h3 className="text-lg">{it?.name || "Leerer Slot"}</h3>
                        {it?.description && (
                            <p className="text-sm">{it?.description}</p>
                        )}
                        <div className="flex items-center justify-between w-full pt-2">
                            <span className="text-xs text-muted-foreground">
                                <ReactBergBalance
                                    amount={it?.value || 0}
                                    coin={props.coin}
                                    className="text-[0.5em]"
                                />
                            </span>
                            <div>
                                <RarityTag
                                    rarity={it?.Rarity || Rarity.COMMON}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
};
