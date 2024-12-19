import type React from "react";

export const InventoryItem: React.FC<{
    className: string;
}> = ({ className }) => {
    return (
        <div className={className}>
            <img
                src={icons[path]()}
                class="w-full h-full"
                alt={i}
                width={width}
                height={height}
            />
            <img
                src={typeIcons[pathType]()}
                class="w-full h-full"
                alt={pathType}
                style={{ position: "relative", top: "-90%", left: "15%" }}
                width={width}
                height={height}
            />
        </div>
    );
};
