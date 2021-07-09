var path,runner,leftBoundary, rightBoundary;
var pathImg, runnerImg;
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,800);
  //create sprites here

  path = createSprite(200,400);
  path.addImage(pathImg);
  path.velocityY = -4;
  path.scale = 1.3

  runner = createSprite(160,500,40,40);
  runner.shapeColor = "red"
  runner.addAnimation("running",runnerImg);
  runner.scale = 0.1

  leftBoundary = createSprite(0,200,80,1000);
 leftBoundary.visible = false;

  rightBoundary = createSprite(400,200,80,1000);
  rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = -4;

  if(path.y <0){
    path.y = path.height/2;
  }

  runner.x = mouseX;

  edges = createEdgeSprites();

  runner.collide(edges[3]);
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);
  
  drawSprites();
}
