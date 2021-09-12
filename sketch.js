const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var snowfall,snowfall1,snowfall2,snowfall3;
var snowfall
var snowfall=[]
var backgroundImg;
function preload(){
  snowImg = loadImage("snow3.jpg")
}
function setup(){
  var canvas = createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,600,1200,20);
  // snowfall = new Snowfall(500,200)
   //snowfall1 = new Snowfall(50,52)
   //snowfall2 = new Snowfall(400,20)
   //snowfall3 = new Snowfall(700,100)
  //backgroundImg= new Background(30,20,1500,1400)
  backgroundImg=createSprite(530,229,10,0)
  backgroundImg.addImage("running",snowImg)
  backgroundImg.scale=1.1
}
function draw(){
  background("white")

  Engine.update(engine);

  
  if(frameCount%6===0){
   snowfall.push(new Snowfall(random(0,800),0))
  }
  backgroundImg.display()
  //snowfall.display();
  //snowfall1.display();
  //snowfall2.display();
  //snowfall3.display();
  for (var j = 0;j < snowfall.length;j++){
    snowfall[j].display(); 
    
}

}