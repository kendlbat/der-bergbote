import { EquippableType, Rarity } from "./enums";

interface Items {
    [item_id: string]: {
        resourceName: string;
        type: EquippableType;
        rarity: Rarity;
    } & Record<string, any>;
}

export const items: Items = {
    //Equippables
    e1: {
        name: "Platinum Monokel",
        description: "",
        resourceName: "platinum_monocle_thick",
        rarity: Rarity.LEGENDARY,
        type: EquippableType.EYES,
    },
    e2: {
        name: "Feines Platinum Monokel",
        description: "",
        resourceName: "platinum_monocle",
        rarity: Rarity.LEGENDARY,
        type: EquippableType.EYES,
    },
    e3: {
        name: "Gold Monokel",
        description: "",
        resourceName: "gold_monocle_thick",
        rarity: Rarity.EPIC,
        type: EquippableType.EYES,
    },
    e4: {
        name: "Feines Gold Monokel",
        description: "",
        resourceName: "gold_monocle",
        rarity: Rarity.EPIC,
        type: EquippableType.EYES,
    },
    e5: {
        name: "Silber Monokel",
        description: "",
        resourceName: "silver_monocle_thick",
        rarity: Rarity.RARE,
        type: EquippableType.EYES,
    },
    e6: {
        name: "Bronze Monokel",
        description: "",
        resourceName: "bronze_monocle_thick",
        rarity: Rarity.UNCOMMON,
        type: EquippableType.EYES,
    },
    e7: {
        name: "Linsenloses Silber Monokel",
        description: "",
        resourceName: "silver_monocle",
        rarity: Rarity.COMMON,
        type: EquippableType.EYES,
    },
    e8: {
        name: "Zylinderhut (Lila Textileinsatz)",
        description: "",
        resourceName: "tophat_purple_inlay",
        rarity: Rarity.EPIC,
        type: EquippableType.HAIR,
    },
    e9: {
        name: "Zylinderhut (Roter Textileinsatz)",
        description: "",
        resourceName: "tophat_red_inlay",
        rarity: Rarity.EPIC,
        type: EquippableType.HAIR,
    },
    e10: {
        name: "Zylinderhut (Amisch) (Rot)",
        description: "",
        resourceName: "tophat_red_inlay_belt",
        rarity: Rarity.LEGENDARY,
        type: EquippableType.HAIR,
    },
    //Hautfarben
    s1: {
        name: "Dunkel",
        description: "",
        hex: "#8d5524",
        rarity: Rarity.UNCOMMON,
        type: EquippableType.SKIN,
    },
    s2: {
        name: "Braun",
        description: "",
        hex: "#c68642",
        rarity: Rarity.UNCOMMON,
        type: EquippableType.SKIN,
    },
    s3: {
        name: "Gebräunt",
        description: "",
        hex: "#e0ac69",
        rarity: Rarity.UNCOMMON,
        type: EquippableType.SKIN,
    },
    s4: {
        name: "Weiss",
        description: "",
        hex: "#f1c27d",
        rarity: Rarity.UNCOMMON,
        type: EquippableType.SKIN,
    },
    s5: {
        name: "Blass",
        description: "",
        hex: "#ffdbac",
        rarity: Rarity.UNCOMMON,
        type: EquippableType.SKIN,
    },
    s6: {
        name: "Schwarz",
        description: "Aber wirklich",
        hex: "#000000",
        rarity: Rarity.LEGENDARY,
        type: EquippableType.SKIN,
    },
    s7: {
        name: "Waldmeister",
        description: "Schmeckt nach Waldmeister :(",
        hex: "#304529",
        rarity: Rarity.EPIC,
        type: EquippableType.SKIN,
    },
    s8: {
        name: "Minze",
        description: "Guten morgen, frisch würtzig",
        hex: "#3EB489",
        rarity: Rarity.RARE,
        type: EquippableType.SKIN,
    },
    //Gesichter
    f1: {
        name: "Selbssicherer Lächler",
        description: "Kommt einem irgendwie bekannt vor...",
        resourceName: "roblox_man_face",
        rarity: Rarity.LEGENDARY,
        type: EquippableType.FACE,
    },
    f2: {
        name: "Schlangenmann",
        description: "",
        resourceName: "snake_guy_face",
        rarity: Rarity.EPIC,
        type: EquippableType.FACE,
    },
    f3: {
        name: "Warum is ans seiner Augen größer als des andre?",
        description: "",
        resourceName: "big_eye_smal_eye_face",
        rarity: Rarity.EPIC,
        type: EquippableType.FACE,
    },
    f4: {
        name: "Verwirrtes Gesicht",
        description: "",
        resourceName: "clueles_face",
        rarity: Rarity.RARE,
        type: EquippableType.FACE,
    },
    f5: {
        name: "Testgesicht",
        description: "",
        resourceName: "dummy_face",
        rarity: Rarity.UNCOMMON,
        type: EquippableType.FACE,
    },
    f6: {
        name: "Verängstigtes Gesicht",
        description: "",
        resourceName: "scared_face",
        rarity: Rarity.UNCOMMON,
        type: EquippableType.FACE,
    },
    f7: {
        name: "Müde ",
        description: "",
        resourceName: "sleepy_face",
        rarity: Rarity.UNCOMMON,
        type: EquippableType.FACE,
    },
};
