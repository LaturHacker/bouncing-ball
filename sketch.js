const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;

function setup (){
    var Canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world; 

var object_options = {
    isStatic: true
}

    object = Bodies.rectangle(200,100,50,50,object_options);
    World.add(world,object);
        
    var ground_options = {
        isStatic: true
    }
    
        ground = Bodies.rectangle(200,400,200,20,ground_options);
        World.add(world,ground);

        var ball_options = {
            restitution: 1.0
        }
        
            ball = Bodies.circle(300,100,20,ball_options);
            World.add(world,ball);
           
}

function draw(){
    background (0);
    Engine.update(engine);
    rectMode(CENTER);
rect (object.position.x,object.position.y,50,50);
rect (ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
ellipse (ball.position.x,ball.position.y,20,20);
}
/*var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameObject4)){
    movingRect.shapeColor = "blue";
    gameObject4.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject4.shapeColor = "green";
  }
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}*/