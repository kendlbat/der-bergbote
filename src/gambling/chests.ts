interface Chest {
    name: string;
    description: string;
    resourceName: string;
    cost: number;
    lootTable: Record<string, number>
}

export const chests: Record<number, Chest> = {
    1: {
        name:'Monokel Truhe',
        description:'',
        resourceName:'monocle_chest',
        cost: 500,
        lootTable:{
            'e1':0.01,
            'e2':0.01,
            'e3':0.05,
            'e4':0.05,
            'e5':0.2,
            'e6':0.3,
            'e7':0.38  
        },
    },
    /*
    2: {
        name:'Outfittery 1850'
    }
        */
};
