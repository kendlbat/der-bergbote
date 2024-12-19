import coin from "@/assets/coin.gif";

export const Coin: React.FC<{className: string}> = ({className = "inline-block"}) => {
    return (
        <img 
            src={coin.src} 
            alt="Coin"
            className={className}
        />
    )
}