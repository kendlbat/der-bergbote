import { items } from "@/gambling/items";

export const UserRenderer = (props) => {
    
    
    let urlMatch = props.loc?.startsWith("/me");

    let renderableEquippables = props.equippedItems.filter((e) => e.priority).sort((a, b) => a.priority - b.priority);
    
    return (
        <a href={props.href} className="p-1 px-3 flex justify-around rounded" 
        style={{padding: "-23px",width: props.width, height: props.height, backgroundColor: urlMatch ? "#ffffff1e" : ""}}>
            <img
                style={{objectFit:"contain"}}
                src={props.baseIcon.src}
                className="left-0 top-0"
                alt={"IMG"}/>
            {renderableEquippables.map((item) => {
                return (
                    <img
                    src={item.image.src}
                    className="left-0 top-0"
                    style={{objectFit:"contain", position:"relative", marginLeft: "-100%"}}
                    alt={"Type"}/>  
                );
            })}
        </a>
    );
};
