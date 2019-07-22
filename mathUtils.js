var RAD = Math.PI / 180;
var ninety = .5*Math.PI;


function getRandomArbitrary(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function direction(dx, dy){
    let dir = 0;
    if(dx > 0){
        dir = -(Math.atan(dx/dy));

        if(dy < 0){
            dir = dir+Math.PI;
        }
    } else{
        dir = Math.atan(dy/dx) + .5*Math.PI;
    }

    return dir;
}