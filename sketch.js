var car,wall;

var s ,w,d,t;
function setup() {
  createCanvas(1600,400);

  s= random(223,321);
  w= random(32,50);
  t= random(22,83)
  d= ((s*s*w*5)/(t*t*t*10));
  

  car=createSprite(25, 200, 50, 20);
  car.shapeColor="white";
  car.velocityX = s;
  

  wall=createSprite(1200,200,t,height/2);
  wall.shapeColor=color(80,80,80);

  
}

function draw() {
  background("black");  
 if(wall.x-car.x<(wall.width+car.width)/2) {
   car.velocityX=0;
   car.x=wall.x-car.width+25

   if(d<10){
     car.shapeColor="green";
     fill("white");
     textSize(30);
     text("This wall is effective",width/2,height/2)
    }else if(d>10){
      car.shapeColor="red";
      fill("white")
      textSize(30);
      text("This wall is not effective",width/2,height/2)
    }else{
      car.shapeColor="white";
    }
  } 
  drawSprites();
}//mam you have not checked my project ok