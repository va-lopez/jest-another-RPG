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

Player.prototype.getHealth = function(){
    return `${this.name}'s health is now ${this.health}`;
};

Player.prototype.isAlive = function(){
    if (this.health > 0 )
        return true;
    return false;
    
    //another way
    // if(this.health === 0)
    //     return false;
    // return true;
};

Player.prototype.reduceHealth = function(amount){
    this.health-=amount;
    if(this.health<0)
        this.health = 0;
}

Player.prototype.getAttackValue = function(){
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max-min)+min);
};

Player.prototype.addPotion = function(potion){
    this.inventory.push(potion);
};

Player.prototype.usePotion = function(index) {
  const potion = this.getInventory().splice(index, 1)[0];

  switch (potion.name) {
    case 'agility':
      this.agility += potion.value;
      break;
    case 'health':
      this.health += potion.value;
      break;
    case 'strength':
      this.strength += potion.value;
      break;
  }
};

module.exports = Player;