const Potion = require('../lib/Potion.js');

function Player(name){
    //initial stats
    this.name = name;
    this.health = 100;
    this.strength = 100;
    this.agility = 100;
    //starts with 2 potions
    this.inventory = [item1, item2];
};

function getStats(){
    return {'health':health, 'strength':strength, 'agility': agility}
};

function getInventory(){
    if (inventory.length > 0)
        return inventory;
    else
        return false;
};

function getHealth(){
    return health;
};

function getAttackValue(){
    return attack;
};

function isAlive(){
    if (health > 0 )
        return true;
    return false;
};

function addPotion(){
    const potion = new Potion('health');
    inventory +=1;
};

function usePotion(){

};

function reduceHealth(){

}