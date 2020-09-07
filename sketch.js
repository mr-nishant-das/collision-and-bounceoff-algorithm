var rect1, rect2, rect3, rect4, rect5, rect6;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(250, 200, 40, 80);
  rect1.shapeColor = "blue";

  rect2 = createSprite(550, 200, 80, 40);
  rect2.shapeColor = "yellow";

  rect3 = createSprite(650, 350, 40, 80);
  rect3.shapeColor = "yellow";
  rect3.velocityX = -5;

  rect4 = createSprite(450, 350, 80, 40);
  rect4.shapeColor = "yellow";
  rect4.velocityX = 5;

  rect5 = createSprite(350, 180, 40, 80);
  rect5.shapeColor = "yellow";

  rect6 = createSprite(550, 100, 80, 40);
  rect6.shapeColor = "yellow";
}

function draw() {
  background(255,255,255);  

  rect2.x = mouseX;
  rect2.y = mouseY;
    
  if(isTouching(rect2, rect4)){
    rect2.shapeColor = "red";
    rect4.shapeColor = "green";
  }
  else{
        rect2.shapeColor = "yellow";
    rect4.shapeColor = "yellow";
  }
  bouncing(rect3, rect4);

  drawSprites();
}

function isTouching(object1, object2){
  if(object2.x-object1.x <  object1.width/2+object2.width/2
    && object1.x-object2.x < object1.width/2+object2.width/2
    && object2.y-object1.y < object1.height/2+object2.height/2
    && object1.y-object2.y < object1.height/2+object2.height/2){
    
    return true;
  }
  else {
    return false;
  }
}
function bouncing(object1, object2){
  if(object2.x-object1.x <  object1.width/2+object2.width/2
    && object1.x-object2.x < object1.width/2+object2.width/2){
      object2.velocityX = object2.velocityX*(-1);
      object1.velocityX = object1.velocityX*(-1);
      object1.shapeColor = "red";
      object2.shapeColor = "yellow";
    }
    if(object2.y-object1.y < object1.height/2+object2.height/2
      && object1.y-object2.y < object1.height/2+object2.height/2){
        object2.velocityY = object2.velocityY*(-1);
        object1.velocityY = object1.velocityY*(-1);
      }
}