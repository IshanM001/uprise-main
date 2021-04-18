
var player, booster, portal, coin;
var platform1, platform2, platform3, platform4, platform5, platform6, platform7, platform8, platform9, platform10, floor, bgimage, bg;
var obstacleGroup

function preload(){
   console.log("preload")
    bgimage = loadImage("images/background.png");
    coin = loadImage("images/coin.png");
    playerImage = loadImage("images/player.png");
    portal = loadImage("images/portal.png");
    gameOver = loadImage("images/gameOver.png");
}


function setup() {
    gameState="start";

    createCanvas(displayWidth-30, displayHeight-90);
    
    player = createSprite(400,940,40,40);
    player.scale=0.5
    player.addImage(playerImage);
    platform1 = createSprite(displayWidth/2, displayHeight-100, 1950,20)
    platform2 = createSprite(1881,600,20,1700)
    platform3 = createSprite(6,500,20,3000)
    obstacleGroup=new Group();
  

}
function draw(){

  console.log("bgimage")
    background(bgimage)

    

    if(gameState==="start"){
    
    text ('press space to start and use "W A S D" to move, Use "P" to pause',150,160)
    
    }


   



    if(keyDown("a")){
      gameState="play"
  }





  if(keyDown("d")){
    gameState="play"
}
    



    if(keyDown("space")){
      gameState="play"
    }
    if(keyDown("p")){
        gameState="start"
        obstacleGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
    }

    if(keyDown("a")){
       player.velocityX-=3
    }

  //  if(keyDown("w")) {
   //     player.velocityY -=3;
   //   }

   //   if(keyDown("s")){
   //     player.velocityY += 3;
 //   }

    if(keyDown("d")) {
     
      player.velocityX+=3;
    }

  //  player.collide(platform1);
  if(player.collide( platform2)){

    gameState = "end"
    text ('You lost',150,160)

  }
  if(player.collide( platform3)){

    gameState = "end"
    text ('You lost',150,160)

  }

  if(gameState==="play"){
    spawnObstcles();


  }





  if(obstacleGroup.isTouching(player)){
   gameState="end"


  }
  if(gameState==="end"){

    obstacleGroup.destroyEach();
    player.destroy();
    var gameOver1=createSprite(displayWidth/2 , displayHeight/2);
    gameOver1.addImage(gameOver)

  }



   
//------------------------------------------




//  if(keyDown("w")) {
 //     player.velocityY -=3;
  //  }

  //  if(keyDown("s")){
  //    player.velocityY += 3;
//  }

  if(keyDown("d")) {
   
    player.velocityX+=3;
  }

 

  // --------------------------------------


drawSprites()
}

function spawnObstcles(){
  if(frameCount%75 === 0){
    var obstacle = createSprite(200,0,30,30);
    obstacle.velocityY=5;
    obstacle.x=random(50,displayWidth-100)


  }
  
  

}