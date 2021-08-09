const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(800,100,15);
    rubber1 = new Rubber(880,100,15);
    rubber2 = new Rubber(860,100,15);
    rubber3 = new Rubber(840,100,15);
    rubber4 = new Rubber(820,100,15);
    stone = new Stone (600,100,50,50)
    iron = new Iron(700,50,64,62)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();

    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
 
}