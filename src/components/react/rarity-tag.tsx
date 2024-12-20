import {
    getMainColorRarity,
    getEdgeColorRarity,
    type Rarity,
} from "@/gambling/enums";

function invertHexColor(hex: string) {
    return (
        "#" +
        (0xffffff ^ parseInt(hex.substring(1), 16))
            .toString(16)
            .padStart(6, "0")
    );
}

export const RarityTag: React.FC<{ rarity: Rarity }> = ({ rarity }) => {
    const color = getMainColorRarity(rarity);
    return (
        <div
            className={`rounded relative leading-4 pt-[0.1em] px-[0.4em] bg-secondary text-white inline-block text-nowrap`}
            style={{
                clipPath: "border-box",
                border: `3px solid ${color}`,
                fontWeight: "lighter",
            }}
        >
            <span
                className="shimmer-effect absolute left-0 top-0 w-[3em] h-[calc(100%+6px)] -my-[3px] z-[1] rounded"
                style={{
                    background:
                        "linear-gradient(-45deg, #00000000 40%, #fafafa 50%, #00000000 60%)",
                }}
            />
            {rarity}
        </div>
    );
};
