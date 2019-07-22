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

var lose = false;
function loseScreen(){
    //clear();
    document.getElementById("loseScreen").style.display = 'block';
    document.getElementById("loseScreen").style.top = c_y.toString() + 'px';
    document.getElementById("loseScreen").style.left = c_x.toString() + 'px';
    //Ask to restart
}


var pbutton = false;

pauseButton.addEventListener('click', function(){
    if(pbutton){
        pbutton = false;
    } else{
        pbutton = true;
    }
});

resetButton.addEventListener('click', function(){
    lose = true;
    p1.x = 0;
    p1.y = 0;
    p1.health = 100;
    healthBar.innerHTML = 100;
    ammo = 110;
    ammoBar.innerHTML = 110;

    AboxList = [];
    spawnBoxes(5, 3000, 3000);

    zombies = [];
    numZombies = 100;
    zombieBar.innerHTML = numZombies;
    createZombies(numZombies, 3000, 3000);
    lose = false;
    document.getElementById("loseScreen").style.display = 'none';
    drawLoop();
    
});