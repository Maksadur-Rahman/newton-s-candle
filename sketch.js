
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var roof;
var rope;
var ball1,ball2,ball3,ball4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.World;

  //Create the Bodies Here.
  ball1=new Ball(400,600,60);
  ball2=new Ball(340,600,60);
  ball3=new Ball(460,600,60);
  ball4=new ball(520,600,60);

  rope = new Rope(ball1.body,roof.body,-60*2,0);

  roof=new Roof(400,400,500,50);

   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();

  roof.display();
  rope.display();
  drawSprites();
  
}



