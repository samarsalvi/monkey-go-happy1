
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  //createCanvas(600,300)
 monkey = createSprite(80,315,20,20);
 monkey.addAnimation ("moving",monkey_running );
 monkey.scale = 0.1;
  
 ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  
  
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
  background("orange");
  if (ground.x <0){
    ground.x = 400;
  }
  
  
  

  
  
  
  
  if (keyDown("space") && monkey.y > 200){
    monkey.velocityY = -12;
    
  }
  monkey.velocityY = monkey.velocityY + 0.8;

 monkey.collide (ground);
  
  
  
  spawnObstacles();
  spawnFood();

  drawSprites();
  
  
   stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
  
    if(obstacleGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
    
    
    }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
}

function spawnFood(){
  if (frameCount%80===0){
    banana = createSprite (600, 250, 40, 10);
    banana.velocityX = -5;
    banana.addImage (bananaImage);
    banana.scale = 0.07
    banana.y = random(120,200)
   banana.lifetime = 300;
    FoodGroup.add(banana);
   
    
    
  }
  
  
  
}


function spawnObstacles(){
  if (frameCount%300===0){
    obstacle = createSprite (800, 320, 10, 40);
    obstacle.velocityX = -5;
    obstacle.addImage (obstaceImage);
    obstacle.scale = 0.16
   // obstacle.y = random(120,200)
     obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
   
    
    
  }
  
  
}


