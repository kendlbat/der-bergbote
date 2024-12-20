export enum Rarity {
    COMMON = "Ramschware",
    UNCOMMON = "Touristenkrempel",
    RARE = "Wanderbar",
    EPIC = "Bergsteiger-Zertifiziert",
    LEGENDARY = "Gipfelware",
}

export enum EquippableType {
    SHIRT = "shirt",
    PANTS = "pants",
    HAIR = "hair",
    SKIN = "skin",
    FACE = "face",
    EYES = "eyes",
    SHOES = "shoes",
}

export function getEquippablePriority(priority: String) {
    switch(priority) {
        case "skin": return 1;
        case "face": return 2;
        case "eyes": return 3;
        case "shirt": return 4;
        case "hair": return 5;
    }
}

export function getMainColorRarity(rarity: String) {
    switch(rarity) {
        case "Ramschware": return "#CBB9B8";
        case "Touristenkrempel": return "#A5D6A7";
        case "Wanderbar": return "#B2EBF2";
        case "Bergsteiger-Zertifiziert": return "#AF99D4";
        case "Gipfelware": return "#E91E63";
        default: return "";
    }
}

export function getEdgeColorRarity(rarity: String) {
    console.log("RARITY VAL IS: "+rarity);
    switch(rarity) {
        case "Ramschware": return "#979392";
        case "Touristenkrempel": return "#2E7D32";
        case "Wanderbar": return "#01579B";
        case "Bergsteiger-Zertifiziert": return "#512DA8";
        case "Gipfelware": return "#880E4F";
        default: return "gray";
    }
}
