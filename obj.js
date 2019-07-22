//TODO change zombies and bullet lists into a hashset 
// for faster collision checking
//  Key of hash would represent where an entity is on the map
Object.prototype.renameProperty = function (oldName, newName) {
     // Do nothing if the names are the same
     if (oldName == newName) {
         return this;
     }
    if (this.hasOwnProperty(oldName)) {
        this[newName] = this[oldName];
        delete this[oldName];
    }
    return this;
};

var obj = function( x, y, dir, img ){
    this.x = x;
    this.y = y;
    this.img = img;
    this.dir = dir;
}

obj.prototype.move = function(x, y){
	this.x += x;
    this.y += y;
    this.midpointX += x;
    this.midpointY += y;
}

obj.prototype.follow = function( entity ){
	var dx = this.x - entity.x;
    var dy = this.y - entity.y;
    this.dir = direction(dx, dy);

    dy = Math.sin(this.dir-ninety)*this.speed; // Might want to change these
    dx = Math.sqrt((this.speed*this.speed) - (dy*dy)); //
    this.move(dx, dy);
    if(this.dir < 0 || this.dir > Math.PI){
        this.move(-2*dx, 0);
    }
}

obj.prototype.draw = function( callback ){

}

obj.prototype.update = function( callback ){

}