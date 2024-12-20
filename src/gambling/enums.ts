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
