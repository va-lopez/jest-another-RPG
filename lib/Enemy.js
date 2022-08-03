const Potion = require('../lib/Potion');
const Character = require('./Character');

function Enemy(name,weapon){
    this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();
    
    this.health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5);
}


//inheritis prototype methods from character here:
Enemy.prototype = Object.create(Character.prototype);

Enemy.prototype.getDescription = function(){
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
};


Enemy.prototype.getInventory = function(){
    if (this.inventory.length)
        return this.inventory;
    else
        return false;
};

module.exports = Enemy;