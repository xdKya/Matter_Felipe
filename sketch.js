//namespace
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var chao;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();

  world = engine.world;

  var chao_options = {
    isStatic: true
  }

  chao = Bodies.rectangle(200,380,400,50,chao_options);
  World.add(world,chao);
  
  console.log(chao);

}

function draw() {
  background(0);  

  Engine.update(engine);

  fill("orange");
  rectMode(CENTER);
  rect(chao.position.x,chao.position.y,400,50);
}