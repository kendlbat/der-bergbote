import { equippableType, rarity } from "./enums";

interface Items {
    [item_id: string]: Object;
}

export const chests: Items = {
    'e1':{
        name:'Platinum Monokel',
        description:'',
        resourceName:'platinum_monocle_thick',
        rarity: rarity.LEGENDARY,
        type: equippableType.FACE
        },
    'e2':{
        name:'Feines Platinum Monokel',
        description:'',
        resourceName:'platinum_monocle',
        rarity: rarity.LEGENDARY,
        type: equippableType.FACE
    },
    'e3':{
        name:'Gold Monokel',
        description:'',
        resourceName:'gold_monocle_thick',
        rarity: rarity.EPIC,
        type: equippableType.FACE
    },
    'e4':{
        name:'Feines Gold Monokel',
        description:'',
        resourceName:'gold_monocle',
        rarity: rarity.EPIC,
        type: equippableType.FACE
    },
    'e5':{
        name:'Silber Monokel',
        description:'',
        resourceName:'silver_monocle_thick',
        rarity: rarity.RARE,
        type: equippableType.FACE
    },
    'e6':{
        name:'Bronze Monokel',
        description:'',
        resourceName:'bronze_monocle_thick',
        rarity: rarity.UNCOMMON,
        type: equippableType.FACE
    },
    'e7':{
        name:'Linsenloses Silber Monokel',
        description:'',
        resourceName:'silver_monocle',
        rarity: rarity.COMMON,
        type: equippableType.FACE
    },
};
