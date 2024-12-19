import { InventoryHover } from "./InventoryHover";
import InventoryItem from "./InventoryItem.astro";
import { useState } from "react";
const items = [
    {
        name: "platinum_monocle_thick",
        displayName: "Platinum Monocle",
        description: "A classy platinum monocle",
        value: 1000,
    },
    {
        name: "platinum_monocle_thick",
        displayName: "Platinum Monocle",
        description: "A classy platinum monocle",
        value: 1000,
    },
    {
        name: "platinum_monocle_thick",
        displayName: "Platinum Monocle",
        description: "A classy platinum monocle",
        value: 1000,
    },
];

const slotTypes = [
    "skincolor",
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

    return (
    <div>
        <h1 className="flex flex-row justify-center text-[2em] h-min align-middle">
            Inventory
        </h1>
        <div className="flex flex-wrap gap-3">
            {
                items.map((elmn, idx) => {
                    return (
                        <InventoryHover 
                        coin={() => {
                            /*return (<BergBalance
                                amount={elmn.value}
                                className="text-[0.5em]"
                            />);*/
                            return <div>{elmn.value}</div>
                        }}
                        item={elmn}>
                            <span>
                                <div
                                    style={{rotate: hoveredItem == idx ? "-5deg" : "0deg", border: "3px solid gray", marginTop: hoveredItem == idx ? "-4px" : "0px", backgroundColor: hoveredItem == idx ? "#aaaaaa22" : "#aaaaaa00" }}
                                    className="border rounded-lg p-3 h-min w-min aspect-square"
                                    onMouseEnter={() => setHoveredItem(idx)}
                                    onMouseLeave={() => setHoveredItem(-1)}
                                >
                                    Test
                                </div>
                            </span>
                        </InventoryHover>
                    );
                })
            }
        </div>
        <h1 class="flex flex-row justify-center text-[2em] h-min align-middle">
            Equipped Items
        </h1>
        <div className="flex flex-wrap gap-3">
            {
                slotTypes.map((slotIdx, idx) => {
                    return (
                        <div
                            style={{ border: "3px solid gray", marginTop: hoveredEquipped == idx ? "-4px" : "0px", backgroundColor: hoveredEquipped == idx ? "#aaaaaa22" : "#aaaaaa00" }}
                            className="border rounded-lg p-3 h-min w-min aspect-square"
                            onMouseEnter={() => setHoveredEquipped(idx)}
                            onMouseLeave={() => setHoveredEquipped(-1)}
                        >
                            Test
                        </div>
                    );
                })
            }
        </div>
    </div>


    );


}