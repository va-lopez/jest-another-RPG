const Potion = require('../lib/Potion.js');
const Character = require('./Character');

class Player extends Character{

  constructor(name = ''){
      super(name);

      //initial stats
      this.name = name;
      this.health = Math.floor(Math.random()* 10 + 95);
      this.strength = Math.floor(Math.random() * 5 + 7);
      this.agility = Math.floor(Math.random() * 5 + 7);
      //starts with 2 potions
      this.inventory = [new Potion('health'), new Potion()];
  };

  getStats(){
      return {
          potions : this.inventory.length,
          health : this.health,
          strength : this.strength,
          agility : this.agility}
  };

  getInventory(){
      if (this.inventory.length)
          return this.inventory;
      else
          return false;
  };

  addPotion(potion){
      this.inventory.push(potion);
  };

  usePotion(index) {
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
}

module.exports = Player;