import { equippableType, rarity } from "./enums";

interface Items {
    [item_id: string]: Object;
}

export const chests: Items = {
    'e1':{
        'name':'Platinum Monokel',
        'resourceName':'platinum_monocle_thick',
        'rarity': rarity.LEGENDARY,
        'type': equippableType.FACE
        },
    'e2':{
        'name':'Feines Platinum Monokel',
        'resourceName':'platinum_monocle',
        'rarity': rarity.LEGENDARY,
        'type': equippableType.FACE
    },
    'e3':{
        'name':'Gold Monokel',
        'resourceName':'gold_monocle_thick',
        'rarity': rarity.EPIC,
        'type': equippableType.FACE
    },
    'e4':{
        'name':'Feines Gold Monokel',
        'resourceName':'gold_monocle',
        'rarity': rarity.EPIC,
        'type': equippableType.FACE
    },
    'e5':{
        'name':'Silber Monokel',
        'resourceName':'silver_monocle_thick',
        'rarity': rarity.RARE,
        'type': equippableType.FACE
    },
    'e6':{
        'name':'Bronze Monokel',
        'resourceName':'bronze_monocle_thick',
        'rarity': rarity.UNCOMMON,
        'type': equippableType.FACE
    },
    'e7':{
        'name':'Linsenloses Silber Monokel',
        'resourceName':'silver_monocle',
        'rarity': rarity.COMMON,
        'type': equippableType.FACE
    },
};
