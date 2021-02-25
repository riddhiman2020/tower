const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

 var ground,ground1,ground2;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(1200,600);
   engine = Engine.create();
   world = engine.world;

   ground = new Ground(600,height,1200,20);
   ground1 = new Ground(880,350,240,20);
   ground2 = new Ground(480,400,270,20);

   block1=new block(390,350,30,40)
   block2=new block(420,350,30,40)
   block3=new block(450,350,30,40)
   block4=new block(480,350,30,40)
   block5=new block(510,350,30,40)
   block6=new block(540,350,30,40)
   block7=new block(570,350,30,40)

   block8=new block(420,315,30,40)
   block9=new block(450,315,30,40)
   block10=new block(480,315,30,40)
   block11=new block(510,315,30,40)
   block12=new block(540,315,30,40)

   block13=new block(450,275,30,40)
   block14=new block(480,275,30,40)
   block15=new block(510,275,30,40)

   block16=new block(480,235,30,40)

   block17=new block(810,300,30,40)
   block18=new block(840,300,30,40)
   block19=new block(870,300,30,40)
   block20=new block(900,300,30,40)
   block21=new block(930,300,30,40)

   block22=new block(840,265,30,40)
   block23=new block(870,265,30,40)
   block24=new block(900,265,30,40)

   block25=new block(870,230,30,40)

   polygon=Bodies.circle(50,200,20);
   World.add(world, polygon);

   slingshot=new sling(this.polygon,{ x:200,y:200});
}

function draw(){
   
    background(255);
    Engine.update(engine);

    ground.display();
    ground1.display();
    ground2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();

    block16.display();

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    block22.display();
    block23.display();
    block24.display();

    block25.display();

    ellipse(polygon.position.x,polygon.position.y,20);
    slingshot.display();

}   

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
