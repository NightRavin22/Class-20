var rect1, rect2;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 70, 50, 50);
  rect1.shapeColor="blue";
  rect2 = createSprite(400, 130, 60, 60);
  rect2.shapeColor="blue";
  rect3 = createSprite(200,200,50,50);
  rect3.shapeColor="green";
  rect4 = createSprite(600,200,50,50);
rect4.shapeColor="green";

rect3.velocityX=5;
rect4.velocityX=-5;
}

function draw() {
  background("black");  
  rect2.y=mouseY;
  rect2.x=mouseX;

  if(rect2.x-rect1.x < rect2.width/2+rect1.width/2
    && rect1.x-rect2.x < rect2.width/2+rect1.width/2
    && rect2.y-rect1.y < rect2.height/2+rect1.height/2
    && rect1.y-rect2.y < rect2.height/2+rect1.height/2)
    {
rect1.shapeColor="purple";
rect2.shapeColor="purple";
  }
  else{rect1.shapeColor="blue";
rect2.shapeColor="blue";}
if(rect3.x-rect4.x < rect3.width/2+rect4.width/2
  && rect4.x-rect3.x < rect3.width/2+rect4.width/2){
rect3.velocityX=rect3.velocityX*(-1);
rect4.velocityX=rect4.velocityX*(-1);
  }

  if(rect3.y-rect4.y < rect3.height/2+rect4.height/2
    && rect4.y-rect3.y < rect3.height/2+rect4.height/2){
  rect3.velocityY=rect3.velocityY*(-1);
  rect4.velocityY=rect4.velocityY*(-1);
    }
  drawSprites();
}