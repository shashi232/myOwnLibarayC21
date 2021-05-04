var fixRect,movRect;
var topRect,bottomRect;

function setup() {
  createCanvas(800,400);
 fixRect = createSprite(400, 200, 50, 80);
 fixRect.shapeColor = "red";

 movRect = createSprite(100,100,80,50);
 movRect.shapeColor = "yellow";

 topRect = createSprite(100,10,50,80);
 topRect.shapeColor = "pink";

 bottomRect = createSprite(100,350,50,80);
 bottomRect.shapeColor = "brown";

 topRect.velocityY = 2;
 bottomRect.velocityY = -2;

}

function draw() {
  background(255,255,255);
  movRect.x = mouseX ;
  movRect.y = mouseY; 
  
  if(isTouching(fixRect,movRect)){
    fixRect.shapeColor = "blue";
    movRect.shapeColor = "blue";
  }
  else{
    fixRect.shapeColor = "red";
    movRect.shapeColor = "yellow";
  }
  bounceOff(topRect,bottomRect);
  
  drawSprites();
}

