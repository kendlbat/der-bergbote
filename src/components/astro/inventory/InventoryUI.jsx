import { InventoryHover } from "./InventoryHover";
import { useState } from "react";
import { InventoryItem } from "./InventoryItem";
import { items } from "@/gambling/items";
import { getEdgeColorRarity, getEquippablePriority, getMainColorRarity } from "@/gambling/enums";
import { UserRenderer } from "@/components/react/user/userRenderer";
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

        let foundItem = equippedContext.find((e) => items[e.item].type == items[itemID].type);
        let newContext = [...equippedContext];

        if (foundItem != null) {
            newContext = newContext.filter((e) => {
                return e.item != foundItem.item});
        }
        
        let constructedObject = {
            item: itemID,
            slot: items[itemID].type,
            user: items[itemID].user,
        };

        newContext.push(constructedObject);

        
        setEquippedContext(newContext);
    }




    console.log("MAP : "+JSON.stringify(equippedContext.map((e) => e.slot)))

    let mappedContext = equippedContext.map((old) => {
        return {
            priority: getEquippablePriority(old.slot),
            image: (itemsContext.find(
                (it) => it.item == old?.item
            )?.renderImage)
        }
    });

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

                        let primaryCol = getMainColorRarity(items[elmn.item]?.Rarity.toString());
                        let secondaryCol = "#aaaaaa00";
                        if (primaryCol != "") {
                            secondaryCol = primaryCol + "22";
                            primaryCol = primaryCol + "66";
                        } else {
                            primaryCol = "#aaaaaa22";
                        }

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
                                            border: "3px solid "+getEdgeColorRarity(items[elmn.item].Rarity.toString()),
                                            marginTop:
                                                hoveredItem == idx
                                                    ? "-4px"
                                                    : "0px",
                                            backgroundColor:
                                                hoveredItem == idx
                                                    ? primaryCol
                                                    : secondaryCol,
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

                    let primaryCol = getMainColorRarity(items[equippedInSlot?.item]?.Rarity.toString());
                    let secondaryCol = "#aaaaaa00";
                    if (equippedInSlot) {
                        secondaryCol = primaryCol + "22";
                        primaryCol = primaryCol + "66";
                    } else {
                        primaryCol = "#aaaaaa22";
                    }


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
                                        border: "3px solid "+ (equippedInSlot ? getEdgeColorRarity(items[equippedInSlot?.item]?.Rarity.toString()) : "gray"),
                                        marginTop:
                                            hoveredEquipped == idx
                                                ? "-4px"
                                                : "0px",
                                        backgroundColor:
                                            hoveredEquipped == idx
                                                ? primaryCol
                                                : secondaryCol,
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

            

            <UserRenderer href="/me" width="50%" height="100%" icon="portrait_base" equippedItems={mappedContext} baseIcon={props.baseIcon}/>
        </div>
    );
};
