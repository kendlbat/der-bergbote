import { InventoryHover } from "./InventoryHover";
import { useState } from "react";
import { InventoryItem } from "./InventoryItem";
const slotTypes = [
    "skin",
    "face",
    "eyes",
    "hair",
    "pants",
    "shirt",
    "shoes",
];

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
    const [contextUpdate, setContextUpdate] = useState({t: true});

    async function unequipItem(itemID) {

        if (!itemID)
            return;

        const response = await fetch(`/api/items/${itemID}/unequip`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            });

        if (!response.ok) {
            throw new Error(`Failed to equip item: ${response.statusText}`);
        }

        setContextUpdate({...contextUpdate});
    }

    async function equipItem(itemID) {
        const response = await fetch(`/api/items/${itemID}/equip`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            });

        if (!response.ok) {
            throw new Error(`Failed to equip item: ${response.statusText}`);
        }

        setContextUpdate({...contextUpdate});
    }

    return (
        <div>
            <h1 className="flex flex-row justify-center text-[2em] h-min align-middle">
                Inventory
            </h1>
            <div className="flex flex-wrap gap-3">
                {props.items
                    .filter(
                        (it) =>
                            !props.equipped.find((eq) => eq.item === it.item)
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
                    const equippedInSlot = props.equipped.find(
                        (e) => e.slot == slotIdx
                    );
                    return (
                        <div
                            key={slotIdx}
                            style={{
                                border: "3px solid gray",
                                marginTop:
                                    hoveredEquipped == idx ? "-4px" : "0px",
                                backgroundColor:
                                    hoveredEquipped == idx
                                        ? "#aaaaaa22"
                                        : "#aaaaaa00",
                            }}
                            className="border rounded-lg aspect-square relative"
                            onMouseEnter={() => setHoveredEquipped(idx)}
                            onMouseLeave={() => setHoveredEquipped(-1)}
                            onClick={() => {
                                unequipItem(
                                    props.items.find(
                                        (it) => it.item == equippedInSlot?.item
                                    )?.item
                                );
                            }}
                        >
                            <InventoryItem
                                imageIcon={
                                    props.items.find(
                                        (it) => it.item == equippedInSlot?.item
                                    )?.image
                                }
                                
                                typeIcon={props.typeImages[slotIdx + ".png"]}
                            ></InventoryItem>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
