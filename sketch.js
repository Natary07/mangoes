
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, boyImg, stone1, mango1, mango2, mango3, mango4, mango5;
var tree1;
function preload()
{
	boyImg=loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy =createSprite(150,600,1,1);
	boy.addImage(boyImg);
	boy.scale=0.1;

	stone1 = new Stone(100,550,10,10);

	tree1 = new Tree(650,550,10,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();

  stone1.display();
  tree1.display();
}



