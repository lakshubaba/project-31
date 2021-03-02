const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var darshasWorld, darshasEngine;
var maxDrops;
var rain = [];
var drop = 100;
var walkingMan, walkImg;
var chata;

function preload(){

    walkImg = loadAnimation("images/Walking Frame/walking_8.png",
                            "images/Walking Frame/walking_7.png",
                            "images/Walking Frame/walking_6.png",
                            "images/Walking Frame/walking_5.png",
                            "images/Walking Frame/walking_4.png",
                            "images/Walking Frame/walking_3.png",
                            "images/Walking Frame/walking_2.png",
                            "images/Walking Frame/walking_1.png",);
    
}

function setup(){
    createCanvas(1400, 900);

   darshasEngine = Engine.create();
   darshasWorld = darshasEngine.world;

   walkingMan = createSprite(700,680, 100, 200);
  
   walkingMan.addAnimation("walk", walkImg);
   walkingMan.scale = 0.61;
   chata = new Umberella(700, 610, 120);


for(var i = 0; i < drop; i++ )
{
   rain.push(new Drops(random(0,1400),random(0,1400)));
  
}  
}


function draw(){

    background(0);
    Engine.update(darshasEngine);

    
    for(var i = 0; i < drop; i++ ){
    rain[i].display();
    rain[i].update(); 
    }
   //chata.display();


  drawSprites();  
    
}   

