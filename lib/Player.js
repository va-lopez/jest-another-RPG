const Potion = require('../lib/Potion.js');

function Player(name = ''){
    //initial stats
    this.name = name;
    this.health = Math.floor(Math.random()* 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    //starts with 2 potions
    this.inventory = [new Potion('health'), new Potion()];
};

Player.prototype.getStats = function(){
    return {
        potions : this.inventory.length,
        health : this.health,
        strength : this.strength,
        agility : this.agility}
};

Player.prototype.getInventory = function(){
    if (this.inventory.length)
        return this.inventory;
    else
        return false;
};

// function getHealth(){
//     return health;
// };

// function getAttackValue(){
//     return attack;
// };

// function isAlive(){
//     if (health > 0 )
//         return true;
//     return false;
// };

// function addPotion(){
//     const potion = new Potion('health');
//     inventory +=1;
// };

// function usePotion(){

// };

// function reduceHealth(){

// }

module.exports = Player;