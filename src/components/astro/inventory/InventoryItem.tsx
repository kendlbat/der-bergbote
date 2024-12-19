import type { GetImageResult } from "astro";
import type React from "react";

export const InventoryItem: React.FC<{
    className: string;
    imageIcon: GetImageResult;
    typeIcon: GetImageResult;
}> = ({ className, imageIcon, typeIcon }) => {
    return (
        <div className={className}>
            <img src={imageIcon.src} className="w-full h-full" alt={"Icon"} />
            <img
                src={typeIcon.src}
                className="w-full h-full"
                alt={"Type"}
                style={{ position: "relative", top: "-90%", left: "15%" }}
            />
        </div>
    );
};
