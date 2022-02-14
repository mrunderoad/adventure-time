import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import Player from './js/player.js';
// import Enemy from './js/enemy.js';

let myGamePiece;

let myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 840;
    this.canvas.height = 735;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
    window.addEventListener('keydown', function (e) {
      myGameArea.keys = (myGameArea.keys || []);
      myGameArea.keys[e.keyCode] = true;
    });
    window.addEventListener('keyup', function (e) {
      myGameArea.keys[e.keyCode] = false;
    });
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function(){
    let ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  };
}

function updateGameArea() {
  myGameArea.clear();
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
  if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -5; }
  if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 5; }
  if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speedY = -5; }
  if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speedY = 5; }
  myGamePiece.newPos();
  myGamePiece.update();
}

// function fight(player, enemy) {
//   let turn = true;
//   if (turn === true) {
//     player.playerAttack();
//     turn = !turn;
//   }else if (turn = false) {
//     enemy.enemyAttack();
//     turn = !turn;
//   }
// }

// function displayPlayer(player) {
//   $(".name").html(player.name);
//   $(".hp").html(player.hp);
// }

$(document).ready(function() {
  myGameArea.start();
  myGamePiece = new component(30, 30, "red", 10, 120);
  $( ".col-md-8" ).append( myGameArea.canvas);
  //let Finn = new Player("Finn", 50, "Sword");
  //let Jake = new Player("Jake", 50, "Fist");
  //let Gnome1 = new Enemy(15);
  //let Gnome2 = new Enemy(15);
  //let Gnome3 = new Enemy(15);
  //let Ogre = new Enemy(50);
  //let Beast = new Enemy(50);
  // let newItem = ("#items").val();
  // $(".buy").on("click", function(){
  //   if (newItem==="Potion"){
  //     Finn.inventory.push(newItem);
  //   }
  // });
});