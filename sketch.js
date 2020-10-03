const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload(){
    ballImg = loadImage("sprites/ball.png");
    dusbinImg = loadImage("sprites/Dusbin.png");
}
function setup(){
    canvas = createCanvas(1200,420);
    engine = Engine.create();
    world = engine.world;

    bg = createSprite(600,200,1200,400)
    bg.shapeColor = 180

    ground = new Ground(width/2,400,width,20);

    ground1 = new Ground(width/2,0,width,5);
    
    bird = new Ball(200,50,10,10);

    ball = createSprite(200,200,20,20);
    ball.addImage(ballImg)
    ball.scale = 0.2
    
    dusbin = createSprite(1061,400-75,20,20);
    dusbin.addImage(dusbinImg)
    dusbin.scale =0.5

    box1 = new Box(700+320,height-55,5,200);
    box2 = new Box(700+420,height-65,5,250);

    wall1 = new Box(width+10,height/2,20,height+50);
    wall2 = new Box(-10,height/2,20,height);

    box5 = new Box(1070,height-10,100,5);
    
}


function draw(){
    background(0);
    // background("#f8e2b9");
    Engine.update(engine);
    
    
    box1.display();
    box2.display();
    
    ball.x = bird.body.position.x
    ball.y = bird.body.position.y
    box5.display();
    
    // ball.visible = false
    
    drawSprites();
    
    ground.display();
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(bird.body,bird.body.position,{x:45-25,y:-45+25})
    }
}
