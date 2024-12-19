import { EquippableType, Rarity } from "./enums";

interface Items {
    [item_id: string]: {
        resourceName: string;
        type: EquippableType;
        Rarity: Rarity;
    } & Record<string, any>;
}

export const items: Items = {
    //Equippables
    e1: {
        name: "Platinum Monokel",
        description: "",
        resourceName: "platinum_monocle_thick",
        Rarity: Rarity.LEGENDARY,
        type: EquippableType.EYES,
    },
    e2: {
        name: "Feines Platinum Monokel",
        description: "",
        resourceName: "platinum_monocle",
        Rarity: Rarity.LEGENDARY,
        type: EquippableType.EYES,
    },
    e3: {
        name: "Gold Monokel",
        description: "",
        resourceName: "gold_monocle_thick",
        Rarity: Rarity.EPIC,
        type: EquippableType.EYES,
    },
    e4: {
        name: "Feines Gold Monokel",
        description: "",
        resourceName: "gold_monocle",
        Rarity: Rarity.EPIC,
        type: EquippableType.EYES,
    },
    e5: {
        name: "Silber Monokel",
        description: "",
        resourceName: "silver_monocle_thick",
        Rarity: Rarity.RARE,
        type: EquippableType.EYES,
    },
    e6: {
        name: "Bronze Monokel",
        description: "",
        resourceName: "bronze_monocle_thick",
        Rarity: Rarity.UNCOMMON,
        type: EquippableType.EYES,
    },
    e7: {
        name: "Linsenloses Silber Monokel",
        description: "",
        resourceName: "silver_monocle",
        Rarity: Rarity.COMMON,
        type: EquippableType.EYES,
    },
    e8: {
        name: "Zylinderhut (Lila Textileinsatz)",
        description: "",
        resourceName: "tophat_purple_inlay",
        Rarity: Rarity.EPIC,
        type: EquippableType.HAIR,
    },
    e9: {
        name: "Zylinderhut (Roter Textileinsatz)",
        description: "",
        resourceName: "tophat_red_inlay",
        Rarity: Rarity.EPIC,
        type: EquippableType.HAIR,
    },
    e10: {
        name: "Zylinderhut (Amisch) (Rot)",
        description: "",
        resourceName: "tophat_red_inlay_belt",
        Rarity: Rarity.LEGENDARY,
        type: EquippableType.HAIR,
    },
    //Hautfarben
    s1: {
        name: "Dunkel",
        description: "",
        resourceName: "dark",
        hex: "#8d5524",
        Rarity: Rarity.UNCOMMON,
        type: EquippableType.SKIN,
    },
    s2: {
        name: "Braun",
        description: "",
        resourceName: "brown",
        hex: "#c68642",
        Rarity: Rarity.UNCOMMON,
        type: EquippableType.SKIN,
    },
    s3: {
        name: "Gebräunt",
        description: "",
        resourceName: "browned",
        hex: "#e0ac69",
        Rarity: Rarity.UNCOMMON,
        type: EquippableType.SKIN,
    },
    s4: {
        name: "Weiss",
        description: "",
        resourceName: "white",
        hex: "#f1c27d",
        Rarity: Rarity.UNCOMMON,
        type: EquippableType.SKIN,
    },
    s5: {
        name: "Blass",
        description: "",
        resourceName: "pale",
        hex: "#ffdbac",
        Rarity: Rarity.UNCOMMON,
        type: EquippableType.SKIN,
    },
    s6: {
        name: "Schwarz",
        description: "Aber wirklich",
        resourceName: "black",
        hex: "#000000",
        Rarity: Rarity.LEGENDARY,
        type: EquippableType.SKIN,
    },
    s7: {
        name: "Waldmeister",
        description: "Schmeckt nach Waldmeister :(",
        resourceName: "waldmeister",
        hex: "#304529",
        Rarity: Rarity.EPIC,
        type: EquippableType.SKIN,
    },
    s8: {
        name: "Minze",
        description: "Guten morgen, frisch würtzig",
        resourceName: "mint",
        hex: "#3EB489",
        Rarity: Rarity.RARE,
        type: EquippableType.SKIN,
    },
    //Gesichter
    f1: {
        name: "Selbssicherer Lächler",
        description: "Kommt einem irgendwie bekannt vor...",
        resourceName: "roblox_man_face",
        Rarity: Rarity.LEGENDARY,
        type: EquippableType.FACE,
    },
    f2: {
        name: "Schlangenmann",
        description: "",
        resourceName: "snake_guy_face",
        Rarity: Rarity.EPIC,
        type: EquippableType.FACE,
    },
    f3: {
        name: "Warum is ans seiner Augen größer als des andre?",
        description: "",
        resourceName: "big_eye_smal_eye_face",
        Rarity: Rarity.EPIC,
        type: EquippableType.FACE,
    },
    f4: {
        name: "Verwirrtes Gesicht",
        description: "",
        resourceName: "clueles_face",
        Rarity: Rarity.RARE,
        type: EquippableType.FACE,
    },
    f5: {
        name: "Testgesicht",
        description: "",
        resourceName: "dummy_face",
        Rarity: Rarity.UNCOMMON,
        type: EquippableType.FACE,
    },
    f6: {
        name: "Verängstigtes Gesicht",
        description: "",
        resourceName: "scared_face",
        Rarity: Rarity.UNCOMMON,
        type: EquippableType.FACE,
    },
    f7: {
        name: "Müde ",
        description: "",
        resourceName: "sleepy_face",
        Rarity: Rarity.UNCOMMON,
        type: EquippableType.FACE,
    },
};
