import { InventoryHover } from "./InventoryHover";
import { useState } from "react";
import { InventoryItem } from "./InventoryItem";
import { items } from "@/gambling/items";
const slotTypes = ["skin", "face", "eyes", "hair", "pants", "shirt", "shoes"];

/*
<InventoryItem
i={elmn.name + "_item"}
typeIco="eyes"
className="rounded m-1 h-20 aspect-square"
/>


<InventoryItem
i={"empty"}
typeIco={slotIdx}
class="rounded m-1 h-20 aspect-square"
/>
                                    */

export const InventoryUI = (props) => {
    const [hoveredItem, setHoveredItem] = useState(-1);
    const [hoveredEquipped, setHoveredEquipped] = useState(-1);
    const [itemsContext, setItemsContext] = useState(
        props.items ? props.items : []
    );
    const [equippedContext, setEquippedContext] = useState(
        props.equipped ? props.equipped : []
    );

    async function unequipItem(itemID) {
        if (!itemID) return;

        const response = await fetch(`/api/items/${itemID}/unequip`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to equip item: ${response.statusText}`);
        }
        let newContext = [...equippedContext];
        newContext = newContext.filter((e) => e.item != itemID);

        setEquippedContext(newContext);
    }

    async function equipItem(itemID) {
        const response = await fetch(`/api/items/${itemID}/equip`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to equip item: ${response.statusText}`);
        }
        let newContext = [...equippedContext];
        let foundItem = itemsContext.find((e) => e?.item == itemID);

        let constructedObject = {
            item: foundItem.item,
            slot: items[foundItem.item].type,
            user: foundItem.user,
        };

        newContext.push(constructedObject);
        setEquippedContext(newContext);
    }
    return (
        <div>
            <h1 className="flex flex-row justify-center text-[2em] h-min align-middle">
                Inventory
            </h1>
            <div className="flex flex-wrap gap-3">
                {itemsContext
                    .filter(
                        (it) =>
                            !equippedContext.find((eq) => eq.item === it.item)
                    )
                    .map((elmn, idx) => {
                        return (
                            <InventoryHover
                                key={elmn.item}
                                item={elmn}
                                coin={props.coin}
                            >
                                <span>
                                    <div
                                        style={{
                                            rotate:
                                                hoveredItem == idx
                                                    ? "-5deg"
                                                    : "0deg",
                                            border: "3px solid gray",
                                            marginTop:
                                                hoveredItem == idx
                                                    ? "-4px"
                                                    : "0px",
                                            backgroundColor:
                                                hoveredItem == idx
                                                    ? "#aaaaaa22"
                                                    : "#aaaaaa00",
                                        }}
                                        className="border rounded-lg h-min w-min aspect-square"
                                        onMouseEnter={() => setHoveredItem(idx)}
                                        onMouseLeave={() => setHoveredItem(-1)}
                                        onClick={() => {
                                            equipItem(elmn.item);
                                        }}
                                    >
                                        <InventoryItem
                                            className="h-[3em] w-[3em]"
                                            imageIcon={elmn.image}
                                            typeIcon={elmn.typeIcon}
                                        />
                                    </div>
                                </span>
                            </InventoryHover>
                        );
                    })}
            </div>
            <h1 className="flex flex-row justify-center text-[2em] h-min align-middle">
                Equipped Items
            </h1>
            <div className="flex flex-wrap gap-3">
                {slotTypes.map((slotIdx, idx) => {
                    const equippedInSlot = equippedContext.find((e) => {
                        return e.slot == slotIdx;
                    });

                    return (
                        <InventoryHover
                            key={slotIdx}
                            item={
                                equippedInSlot || {
                                    item: null,
                                    slot: slotIdx,
                                    user: null,
                                }
                            }
                            coin={props.coin}
                        >
                            <span>
                                <div
                                    style={{
                                        rotate:
                                            hoveredEquipped == idx
                                                ? "-5deg"
                                                : "0deg",
                                        border: "3px solid gray",
                                        marginTop:
                                            hoveredEquipped == idx
                                                ? "-4px"
                                                : "0px",
                                        backgroundColor:
                                            hoveredEquipped == idx
                                                ? "#aaaaaa22"
                                                : "#aaaaaa00",
                                    }}
                                    className="border rounded-lg h-min w-min aspect-square"
                                    onMouseEnter={() => setHoveredEquipped(idx)}
                                    onMouseLeave={() => setHoveredEquipped(-1)}
                                    onClick={() => {
                                        unequipItem(equippedInSlot?.item);
                                    }}
                                >
                                    <InventoryItem
                                        className="h-[3em] w-[3em]"
                                        imageIcon={
                                            itemsContext.find(
                                                (it) =>
                                                    it.item ==
                                                    equippedInSlot?.item
                                            )?.image
                                        }
                                        typeIcon={
                                            props.typeImages[slotIdx + ".png"]
                                        }
                                    />
                                </div>
                            </span>
                        </InventoryHover>
                    );
                })}
            </div>
        </div>
    );
};
