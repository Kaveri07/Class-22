const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world;
var ground, ball;

function setup() {
  createCanvas(400,400);

  engine= Engine.create();
  world = engine.world;

  var groundOptions = {
     isStatic : true
    }

  var ballOptions = {
    restitution : 1
  }

  ground= Bodies.rectangle(200,380,400,50,groundOptions);
  World.add(world,ground);
  
  ball= Bodies.circle(200,50,20,ballOptions);
  World.add(world,ball);
  console.log(ball);
  
} 

function draw() {
  background(0);
  Engine.update(engine);

  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,400,50);
 
  ellipseMode(CENTER);
  fill("red");
  ellipse(ball.position.x,ball.position.y,20);
}