var PleftFoot = new Image();
PleftFoot.src = './Resources/PlayerLeftFoot.png';

var playerWalk = [];

PleftFoot.onload = function(){
  playerWalk.push(PleftFoot);
}

var Pstill = new Image();
Pstill.src = './Resources/newone.png';

Pstill.onload = function(){
  playerWalk.push(PleftFoot);
}

var PrightFoot = new Image();
PrightFoot.src = './Resources/PlayerRightFoot.png';

var blood = new Image();
blood.src = './Resources/blood.png';

PrightFoot.onload = function(){
  playerWalk.push(PrightFoot);
}

var zombieLeftFoot = new Image();
zombieLeftFoot.src = "./Resources/zombie2.png";
zombieLeftFoot.onload = function(){}

var bulletImg = new Image();
bulletImg.src = "./Resources/bullet2.png";
bulletImg.onload = function(){}

var map = new Image();
map.src = "./Resources/Map.png";
map.onload = function(){}

var ammoBox = new Image();
ammoBox.src = './Resources/ammoBox.png';
ammoBox.onload = function(){}