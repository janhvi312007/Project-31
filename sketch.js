const Bodies= Matter.Bodies;
const World= Matter.World;
const Engine= Matter.Engine;

var engine,world;
var maxDrops=100;
var Drops=[]
function preload(){
    
}

function setup(){
  createCanvas(800,800); 
   engine= Engine.create();
   world= engine.world;
   Engine.run (engine); 

for(var i=0; i<maxDrops; i++){
     Drops.push(new  Drop(random(0,800),random(0,800)));
}
}

function draw(){
    background(0);
    for(var i=0; i<maxDrops; i++){
        Drops[i].display();
        Drops[i].update();
    }
    
}   

