
function setup() {
  createCanvas(800,400);
 box = createSprite(400,200)
}

function draw() 
{
  background('blue');
  if  (keyDown('right')){
    box.x +=5
  }
  if  (keyIsDown(LEFT_ARROW)){
    box.position.x -=5
  }
  if  (keyDown('up')){
    box.y -=5
  }
  if  (keyIsDown(DOWN_ARROW)){
    box.position.y +=5
  }
drawSprites()
}




