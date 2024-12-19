import type { ImageMetadata } from "astro";

export const ReactBergBalance: React.FC<{
    amount: number;
    className?: string;
    coin: ImageMetadata;
}> = ({ amount = 0, className = "", coin }) => {
    return (
        <span className={className}>
            <span className="flex flex-row justify-center text-[2em] h-min align-middle">
                <span className="h-min self-center mr-[0.19em] text-[1.5em]">
                    {amount}
                </span>
                <div className="inline-block h-[1.2em] self-center aspect-square -mt-[1px]">
                    <img
                        src={coin.src}
                        alt="Coin"
                        className="w-full h-full aspect-square"
                    />
                </div>
            </span>
        </span>
    );
};
