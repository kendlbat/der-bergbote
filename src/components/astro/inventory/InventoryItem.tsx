import type { GetImageResult } from "astro";
import type React from "react";

export const InventoryItem: React.FC<{
    className: string;
    imageIcon?: GetImageResult;
    typeIcon: GetImageResult;
}> = ({ className, imageIcon, typeIcon }) => {
    return (
        <div className="h-[5em] w-[5em] p-1">
            <span className="relative w-full h-full block">
                {imageIcon && (
                    <img
                        src={imageIcon.src}
                        className="w-full h-full p-2"
                        alt={"Icon"}
                    />
                )}
                <img
                    src={typeIcon.src}
                    className="w-full h-full absolute left-0 top-0"
                    alt={"Type"}
                />
            </span>
        </div>
    );
};
