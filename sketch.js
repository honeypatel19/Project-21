
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var engine,world
var ground,leftObj,rightObj
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     var options = {
	isStatic : false,
	restitution : 0.3,
    friction : 0,
	density : 1.2
	 }

	 ball = Bodies.circle(260,100,20,options)
     World.add(world,ball)

    ground = new Ground(width/2,670,1600,20)
    leftObj = new Ground(1100,600,20,120)
	rightObj = new Ground(1350,600,20,120)

	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  leftObj.display()
  rightObj.display()
  ellipse(ball.position.x,ball.position.y,20)
  
  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball,ball.position,{x : 85,y : -85})
}


}
