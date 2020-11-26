
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,character,bg,tree,tree1;

function preload()
{
	character = loadImage("sprites/boy.png");
	bg = loadImage("sprites/bg.png");
	tree1 = loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(100,720,20,50);
	boy.addImage(character);
	boy.scale = 0.1;
	
	tree = createSprite(800,500,800,800);
	tree.addImage(tree1);
	tree.scale = 0.5;
	//Create the Bodies Here.
	stone1 = new stone(80,700,30);
	sling = new SlingShot(stone1.body,{x:80,y:705});

	mango1 = new Mango(870,390);
	mango2 = new Mango(690,300);
	mango3 = new Mango(820,290);
	mango4 = new Mango(720,360);
	mango5 = new Mango(640,430);
	mango6 = new Mango(810,400);
	mango7 = new Mango(980,420);



	ground1 = new ground(100,790,2500,20);
	//tree = new Tree(800,445,800,800);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  drawSprites();
  sling.display();
  tree.display();
  stone1.display();
  ground1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  detectCollision(mango1,stone1);
  detectCollision(mango2,stone1);
  detectCollision(mango3,stone1);
  detectCollision(mango4,stone1);
  detectCollision(mango5,stone1);
  detectCollision(mango6,stone1);
  detectCollision(mango7,stone1);



}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function detectCollision(Lmango,Lstone){
mangoBodyPosition = Lmango.body.position;
stoneBodyPosition = Lstone.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=Lmango.r+Lstone.r){

	Matter.Body.setStatic(Lmango.body,false)
	
}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone1.body,{x:80,y:705});
		sling.attach(stone1.body);
	}
}
