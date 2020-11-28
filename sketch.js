var PLAY, END;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;

function preload(){
  
  
  monkey_running =          loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,300);
  
  monkey = createSprite(50,200,10,10);
  monkey.addAnimation("run",monkey_running);
  monkey.scale = 0.15;
  
  ground = createSprite(200,250,600,20);
  ground.velocityX = -4;
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
  
  score = 0;
  
}


function draw() {
  background("lightBlue");
  
  
  text("SURVIVAL TIME : " + score,320,50);
  
  score = score + Math.round(getFrameRate()/50);
  
  if(keyDown("space")){
    monkey.velocityY = -6;
  }
  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide(ground);
  
  ground.x = ground.width/2;
  
  if(frameCount % 80 === 0){
    foods();
  }
  if(frameCount % 100 === 0){
    obstacles();
  }

  drawSprites();
}

function obstacles(){
  obstacle = createSprite(500,200,10,10);
  obstacle.addAnimation("rock",obstacleImage);
  obstacle.scale = 0.2;
  obstacle.velocityX = -5;
  
  obstacle.lifetime = 300;
  
  obstacleGroup.add(obstacle);
  
}

function foods(){
  banana = createSprite(500,Math.round(random(10,200)),10,10);
  banana.addAnimation("banana",bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -5;
  
  banana.lifetime = 300;
  
  FoodGroup.add(banana);
}





