class Snowfall{
constructor(x,y){
var options = {
    //'restitution':0.5,
    'isStatic':false,
    "timeScale":3
     }

    this.r=10

    this.body=Bodies.circle(x,y,this.r,options)
    this.image=loadImage("snow4.webp")
    console.log(this.body)
    World.add(world,this.body)
   // console.log(this.body)
}
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
  imageMode(CENTER);
    image(this.image, 0,0, 40, 40);
    pop();
 
}
}