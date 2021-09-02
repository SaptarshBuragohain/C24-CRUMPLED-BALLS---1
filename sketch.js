
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bin1,bin2,bin3,ground, paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bin1 = new Dustbin(690,320,20,150);
    bin2 = new Dustbin(910,320,20,150);
    bin3 = new Dustbin(800,380,200,20);
	ground = new Ground(600,height,1200,20);
	paper = new Paper(100,0,15);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  paper.display();

  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:41,y:-41});
	}
}
