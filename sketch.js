
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var paper;
var ground;

function preload()
{
	
}

function setup() {

   var canvas = createCanvas(1200,400);
  
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,10);


    paper = new Paper(200,350,20);




	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);

  Engine.update(engine);

  paper.display();

  ground.display();



  
  
  drawSprites();
 
}



