var garden,rabbit;
var gardenImg,rabbitImg, appleImg, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var randomSpriteGenerator = Math.round(random(1,3));
  if(frameCount%30 == 0)
  {
    if(randomSpriteGenerator == 1)
    {
      createApples();
    }
    else(randomSpriteGenerator >=2)
    {
      createLeaves();
    }
  }
  
  drawSprites();
}
// The functions used to create the sprites
function createLeaves()
{
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.depth = garden.depth + 1;
  leaf.velocityY = 6;
  leaf.scale = 0.08;
  if(frameCount%90 === 1)
  {
    leaf.destroy();
  }
  
}
function createApples()
{
  apple = createSprite(random(50,350),40,10,10);
  apple.depth = garden.depth + 2;
  apple.addImage(appleImg);
  apple.scale = 0.08;
  apple.velocityY = 6;
  if(frameCount%90 === 1)
  {
    apple.destroy();
  }
}