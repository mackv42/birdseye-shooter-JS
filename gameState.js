var loseCtx = document.getElementById("loseScreen").getContext("2d");
loseCtx.fillStyle = "#FF0000"
loseCtx.font = "100px Arial";
loseCtx.fillText("You Lose", 30, 75); 

var healthBar = document.getElementById('health');
var health = 100;

var pauseButton = document.getElementById('pause');
var resetButton = document.getElementById('reset');

var ammoBar = document.getElementById('ammo');
var ammo = 110;

var zombieBar = document.getElementById('zombies');
var numZombies = 100;

healthBar.innerHTML = health;
ammoBar.innerHTML = ammo;
zombieBar.innerHTML = numZombies;

// Put in onload
var canvas = document.getElementById('can');
var context = canvas.getContext('2d');

var centerX = canvas.width/2;
var centerY = canvas.height/2;

var c_pos = canvas.getBoundingClientRect();
var c_x = c_pos.left;
var c_y = c_pos.top;

function handleResize(){
    c_pos = canvas.getBoundingClientRect();
    c_x = c_pos.left;
    c_y = c_pos.top;
}