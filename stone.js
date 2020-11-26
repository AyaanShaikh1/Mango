class stone {
constructor(x,y,r) {
   
var options = {
    isStatic:false,
    restitution:0,
    friction:1,
    density:1.2
}
this.r = r;
this.x = x;
this.y = y;
this.body = Bodies.circle(this.x,this.y,this.r/2,options);
this.image = loadImage("sprites/stone.png")

World.add(world,this.body);
}
display(){
var pos = this.body.position;
var ang = this.body.angle;
push();
translate(pos.x,pos.y);
imageMode(CENTER);
fill("white");
image(this.image,0,0,this.r*2,this.r*2);
pop();
}


}