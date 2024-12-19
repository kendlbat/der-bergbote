import { chests } from "./chests";

function openChest(chest_id:number){
    const randomFloat = Math.random();
    const lootTable = chests[chest_id].lootTable;
    let rollingTotal = 0;
    for(let i in lootTable) {
        rollingTotal += lootTable[i];
        if(randomFloat < rollingTotal)
            return i;
    }
}