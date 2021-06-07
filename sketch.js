const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon ,polygon_img;
var launcher;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  
  stand2 = new Stand(700,260,200,10);
 


polygon = Bodies.circle(40,200,30);
  World.add(world,polygon);
  
  launcher = new Launcher(this.polygon,{x:100,y:200});

  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //stand 2
  
 block1s2 = new Block(610,180,30,40);
  //console.log(block1);
  block2s2 = new Block(640,180,30,40);
  block3s2 = new Block(670,180,30,40);
  block4s2 = new Block(700,180,30,40);
  block5s2 = new Block(730,180,30,40);
  block6s2 = new Block(760,180,30,40);
  block7s2 = new Block(790,180,30,40);
  //level two
  block8s2 = new Block(640,150,30,40);
  block9s2 = new Block(670,150,30,40);
  block10s2 = new Block(700,150,30,40);
  block11s2 = new Block(730,150,30,40);
  block12s2 = new Block(760,150,30,40);
  //level three
  block13s2 = new Block(670,120,30,40);
  block14s2 = new Block(700,120,30,40);
  block15s2 = new Block(730,120,30,40);
  //top
  block16s2 = new Block(700,90,30,40);
 
  

}
function draw() {
  background(56,44,44); 
  fill("lightyellow");
  text(mouseX+","+mouseY,100,20)
  textSize(40);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  



  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 fill("red")
  stand2.display();

  fill("skyblue");
  block1s2.display();
  block2s2.display();
  block3s2.display();
  block4s2.display();
  block5s2.display();
  block6s2.display();
  block7s2.display();
  fill("pink");
  block8s2.display();
  block9s2.display();
  block10s2.display();
  block11s2.display();
  block12s2.display();
  fill("turquoise");
  block13s2.display();
  block14s2.display();
  block15s2.display();
  fill("grey");
  block16s2.display();

  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,50,50);

  launcher.display();
}


function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  launcher.fly();
}