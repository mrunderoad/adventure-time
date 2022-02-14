export default class Enemy {
  constructor(hp) {
    this.hp = hp;
  }
  enemyAttack() {
    return Math.floor((Math.random() *6) +1);
  }
}