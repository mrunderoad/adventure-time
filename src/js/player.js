export default class Player {
  constructor(name, hp, weapon) {
    this.name = name;
    this.hp = hp;
    this.weapon = weapon;
    this.inventory = [];
  }
  useItem(potion) {
    let that = this;
    this.inventory.forEach(function(item) {
      if (item === "Potion") {
        that.hp += 25;
        let indexItem = that.inventory.indexOf(potion);
        that.inventory.splice(indexItem, 1);
      }
    });
  }
  playerAttack() {
    return Math.floor((Math.random() *6)+ 1);
  }
}
