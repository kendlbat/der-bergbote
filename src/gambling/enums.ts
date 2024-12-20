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
    switch (priority) {
        case "skin":
            return 1;
        case "shirt":
            return 2;
        case "face":
            return 3;
        case "eyes":
            return 4;
        case "hair":
            return 5;
        
    }
}

export function getMainColorRarity(rarity: String) {
    switch (rarity) {
        case Rarity.COMMON:
            return "#cbb9b8";
        case Rarity.UNCOMMON:
            return "#a5d6a7";
        case Rarity.RARE:
            return "#b2ebf2";
        case Rarity.EPIC:
            return "#d1c4e9";
        case Rarity.LEGENDARY:
            return "#e91e63";
    }
}

export function getEdgeColorRarity(rarity: String) {
    switch (rarity) {
        case Rarity.COMMON:
            return "#979392";
        case Rarity.UNCOMMON:
            return "#788967";
        case Rarity.RARE:
            return "#4e88a2";
        case Rarity.EPIC:
            return "#765f7b";
        case Rarity.LEGENDARY:
            return "#832d26";
    }
}
