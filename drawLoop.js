window.onload = ( () =>{


    function clear(){
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    function drawLoop(){
        if(lose){
            loseScreen();
            return;
        }

        if(!lose){
            setTimeout(drawLoop, 18)
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
    drawLoop();
    //setInterval( () => { if(!lose) {drawLoop(); }, 18 );

});