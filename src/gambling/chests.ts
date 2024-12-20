interface Chest {
    name: string;
    description: string;
    resourceName: string;
    cost: number;
    lootTable: Record<string, number>;
    fallbackDrop: string;
}

export const chests: Record<number, Chest> = {
    0: {
        name: "Monokel Truhe",
        description: "Macht mich ein Monokel mich zu einem Zyklopen?",
        resourceName: "monocle_chest",
        cost: 500,
        lootTable: {
            e1: 0.005,
            e2: 0.01,
            e3: 0.02,
            e4: 0.05,
            e5: 0.08,
            e6: 0.3,
            e7: 0.538,
        },
        fallbackDrop: "e7",
    },
    1: {
        name: "Tuxedo-Box",
        description:
            "Berta Grumhart von Outfittery stellt für Ihren kommenden Ball im Schloss Schönbrunn die perfekte Garderobe zusammen.",
        resourceName: "tuxedo_chest",
        cost: 1000,
        lootTable: {
            sh1: 0.02,
            e1: 0.01,
            e2: 0.01,
            e3: 0.05,
            e4: 0.05,
            e8: 0.05,
            e9: 0.05,
            e10: 0.02,
        },
        fallbackDrop: "e7",
    },
    2: {
        name: "Hautkiste",
        description: "Die Herkunft der Ware sollte nicht hinterfragt werden.",
        resourceName: "skin_chest",
        cost: 200,
        lootTable: {
            s1: 0.15,
            s2: 0.15,
            s3: 0.15,
            s4: 0.15,
            s5: 0.15,
            s6: 0.01,
            s7: 0.05,
            s8: 0.09,
        },
        fallbackDrop: "s3",
    },
    3: {
        name: "Im Angesicht der Tatsachen",
        description:
            "Let's face it, you should stop looking like the slenderman.",
        resourceName: "face_chest",
        cost: 300,
        lootTable: {
            f1: 0.01,
            f2: 0.04,
            f3: 0.05,
            f4: 0.1,
            f5: 0.2,
            f6: 0.1,
            f7: 0.1,
        },
        fallbackDrop: "f5",
    },
};
