export const UserRenderer = (props) => {
    console.log("ALL USER IMAGES: "+JSON.stringify(props.equippedItems));
    
    let urlMatch = props.loc.startsWith("/me");

    return (
        <a href={props.href} className="p-1 px-3 flex justify-around rounded" 
        style={{width: "18%", backgroundColor: urlMatch ? "#ffffff1e" : ""}}>
            <img
                src={props.baseIcon.src}
                className="left-0 top-0"
                alt={"Type"}/>
        </a>
    
    )
}