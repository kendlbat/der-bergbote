import type { GetImageResult } from "astro";
import type React from "react";

export const InventoryItem: React.FC<{
    className: string;
    imageIcon?: GetImageResult;
    typeIcon: GetImageResult;
}> = ({ className, imageIcon, typeIcon }) => {
    return (
        <div className={className}>
            {imageIcon && (
                <img
                    src={imageIcon.src}
                    className="w-full h-full"
                    alt={"Icon"}
                />
            )}
            <img
                src={typeIcon.src}
                className="w-full h-full z-[1] m-1"
                alt={"Type"}
            />
        </div>
    );
};
