const Potion = require('../lib/Potion');

function Enemy(name,weapon){
    this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();
    
    this.health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5);
}

Enemy.prototype.getDescription = function(){
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
};


Enemy.prototype.getInventory = function(){
    if (this.inventory.length)
        return this.inventory;
    else
        return false;
};

Enemy.prototype.getHealth = function(){
    return `${this.name}'s health is now ${this.health}`;
};

Enemy.prototype.isAlive = function(){
    if (this.health > 0 )
        return true;
    return false;
    
    //another way
    // if(this.health === 0)
    //     return false;
    // return true;
};

Enemy.prototype.reduceHealth = function(amount){
    this.health-=amount;
    if(this.health<0)
        this.health = 0;
}

Enemy.prototype.getAttackValue = function(){
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max-min)+min);
};

module.exports = Enemy;