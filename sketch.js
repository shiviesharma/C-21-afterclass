var ball, wall;
var speed, weight;



function setup() {
  createCanvas(1600,400);
  var bullet = createSprite(400, 200, 20, 10);
  var wall = createSprite(1500, 200, 60,30);
}
function draw() {
  background(255,255,255);
  cartoucheswall();
  drawSprites();
  
}

function cartoucheswall(){
  if(wall.X-bullet.X < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180){
      bullet.shapeColor=color(255,0,0);
  
    }
    if(deformation<180 && deformation>100){
      bullet.shapeColor=color(230,230,0); 
    }
  
    if(deformation<100){
      bullet.shapeColor=color(0,255,0)
    }
  }
}
