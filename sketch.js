var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var redZone,redZone1,redZone2;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
  
		packageSprite=createSprite(width/2, 80, 10,10);
		packageSprite.addImage(packageIMG)
		packageSprite.scale=0.2
	
		helicopterSprite=createSprite(width/2, 200, 10,10);
		helicopterSprite.addImage(helicopterIMG)
		helicopterSprite.scale=0.6
	
		groundSprite=createSprite(width/2, height-35, width,10);
		groundSprite.shapeColor=color(255)
	
		engine = Engine.create();
		world = engine.world;
	
		packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true,restitution:0.5} );
		World.add(world, packageBody);
		
		//Create a Ground
		ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
		 World.add(world, ground);

		redZone = new REDZONE(300,610,10,100);

		redZone1 = new REDZONE(500,610,10,100);

		redZone2 = new REDZONE(400,662,210,10);

		Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  packageSprite.y= packageBody.position.y ;
  redZone.display();
  redZone1.display();
  redZone2.display();
  Engine.update(engine);
  drawSprites();
}

function keyPressed(){
	if(keyCode === DOWN_ARROW){
		packageBody.position.x= packageBody.position.x ;
		Body.setStatic(packageBody,false);
	}

	}
