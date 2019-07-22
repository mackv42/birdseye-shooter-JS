canvas.addEventListener("mousedown", function(){p1.shoot();});

function handler(event){ 
    var x = event.clientX - c_x;
    var y = event.clientY - c_y;

    var dx = (centerX-x);
    var dy = (centerY-y);

    p1.dir = direction(dx, dy);
}

canvas.addEventListener("mousemove", handler);

var Key = {
  _pressed: {},

  LEFT: 65,
  UP: 87,
  RIGHT: 68,
  DOWN: 83,
  
  isDown: function(keyCode) {
    return this._pressed[keyCode];
  },
  
  onKeydown: function(event) {
    this._pressed[event.keyCode] = true;
  },
  
  onKeyup: function(event) {
    delete this._pressed[event.keyCode];
  }
};

////////////////////////////////////////////////////////////////////////////////
window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);


var side = Math.sqrt(50);
character.prototype.update = function(){
    var only = true;
    if (Key.isDown(Key.UP)){
        this.y -= this.speed;

        if(Key.isDown(Key.LEFT)){
            this.y += side;
            this.x -= side;
            only = false;
        }

        if(Key.isDown(Key.RIGHT)){
            this.y += side;
            this.x += side;
            only = false;
        } 
    } else if (Key.isDown(Key.DOWN)){ 
        this.y += this.speed;
        if(Key.isDown(Key.LEFT)){
            this.y -= side;
            this.x -= side;
            only = false;
        }

        if(Key.isDown(Key.RIGHT)){
            this.y -= side;
            this.x += side;
            only = false;
        }              
    }

  if (Key.isDown(Key.LEFT) && only) this.x -= this.speed;
  if (Key.isDown(Key.RIGHT) && only) this.x += this.speed;
  if(this.health < 0){
    lose = true;
  }
}
