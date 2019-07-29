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

function clear(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawLoop(){
    if(lose){
        loseScreen();
        return;
    }

    if(!lose){
        setTimeout(drawLoop, 25);
    }

    if(!pbutton){
        clear();
        p1.update();
        context.drawImage(map, centerX-p1.x, centerY-p1.y);
        updateZombies(p1);
        p1.draw();
        updateBullets();
        updateBoxes();
    }
}

window.onload = ( () =>{
    drawLoop();
});