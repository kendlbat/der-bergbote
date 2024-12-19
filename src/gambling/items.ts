import { equippableType, rarity } from "./enums";

interface Items {
    [item_id: string]: Object;
}

export const chests: Items = {
    //Equippables
    'e1':{
        name:'Platinum Monokel',
        description:'',
        resourceName:'platinum_monocle_thick',
        rarity: rarity.LEGENDARY,
        type: equippableType.EYES
        },
    'e2':{
        name:'Feines Platinum Monokel',
        description:'',
        resourceName:'platinum_monocle',
        rarity: rarity.LEGENDARY,
        type: equippableType.EYES
    },
    'e3':{
        name:'Gold Monokel',
        description:'',
        resourceName:'gold_monocle_thick',
        rarity: rarity.EPIC,
        type: equippableType.EYES
    },
    'e4':{
        name:'Feines Gold Monokel',
        description:'',
        resourceName:'gold_monocle',
        rarity: rarity.EPIC,
        type: equippableType.EYES
    },
    'e5':{
        name:'Silber Monokel',
        description:'',
        resourceName:'silver_monocle_thick',
        rarity: rarity.RARE,
        type: equippableType.EYES
    },
    'e6':{
        name:'Bronze Monokel',
        description:'',
        resourceName:'bronze_monocle_thick',
        rarity: rarity.UNCOMMON,
        type: equippableType.EYES
    },
    'e7':{
        name:'Linsenloses Silber Monokel',
        description:'',
        resourceName:'silver_monocle',
        rarity: rarity.COMMON,
        type: equippableType.EYES
    },
    'e8':{
        name:'Zylinderhut (Lila Textileinsatz)',
        description:'',
        resourceName:'tophat_purple_inlay',
        rarity: rarity.EPIC,
        type: equippableType.HAIR
    },
    'e9':{
        name:'Zylinderhut (Roter Textileinsatz)',
        description:'',
        resourceName:'tophat_red_inlay',
        rarity: rarity.EPIC,
        type: equippableType.HAIR
    },
    'e10':{
        name:'Zylinderhut (Amisch) (Rot)',
        description:'',
        resourceName:'tophat_red_inlay_belt',
        rarity: rarity.LEGENDARY,
        type: equippableType.HAIR
    },
    //Hautfarben
    's1':{
        name:'Dunkel',
        description:'',
        hex:'#8d5524',
        rarity: rarity.UNCOMMON,
        type: equippableType.SKIN
    },
    's2':{
        name:'Braun',
        description:'',
        hex:'#c68642',
        rarity: rarity.UNCOMMON,
        type: equippableType.SKIN
    },
    's3':{
        name:'Gebräunt',
        description:'',
        hex:'#e0ac69',
        rarity: rarity.UNCOMMON,
        type: equippableType.SKIN
    },
    's4':{
        name:'Weiss',
        description:'',
        hex:'#f1c27d',
        rarity: rarity.UNCOMMON,
        type: equippableType.SKIN
    },
    's5':{
        name:'Blass',
        description:'',
        hex:'#ffdbac',
        rarity: rarity.UNCOMMON,
        type: equippableType.SKIN
    },
    's6':{
        name:'Schwarz',
        description:'Aber wirklich',
        hex:'#000000',
        rarity:rarity.LEGENDARY,
        type: equippableType.SKIN
    },
    's7':{
        name:'Waldmeister',
        description:'Schmeckt nach Waldmeister :(',
        hex:'#304529',
        rarity:rarity.EPIC,
        type: equippableType.SKIN
    },
    's8':{
        name:'Minze',
        description:'Guten morgen, frisch würtzig',
        hex:'#3EB489',
        rarity:rarity.RARE,
        type: equippableType.SKIN
    },
    //Gesichter
    'f1':{
        name:'Selbssicherer Lächler',
        description:'',
        resourceName:'roblox_man_face',
        rarity:rarity.LEGENDARY,
        type: equippableType.FACE
    }
};
