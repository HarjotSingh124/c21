
var speed1,weight1;
var damage,deformation;
var car1,wall1;
var car2,wall2;
var speed2,speed2
var thickness,thickness1;




function setup() {
  createCanvas(1300,600);


speed1=32;
weight1=223;
speed2=32;
weight2=223;
thickness=70;
thickness1=40;

car1=createSprite(50,250,20,20);
car1.velocityX=speed1;
car1.shapeColor="white";

wall1=createSprite(1000,250,thickness,60);

car2=createSprite(50,450,60,10);
car2.velocityX=speed1;
car2.shapeColor="white";

wall2=createSprite(1000,450,thickness1,60);
}

function draw() {
  background("black");  

    if(car1.x>wall1.x||car2.x>wall2.x){
    car1.velocityX=0;
    var damage =0.5*weight1*speed1*speed1/(thickness*thickness*thickness)
    if(damage>10){
      wall1.shapeColor=("red");
    }
    if(damage<10){

      wall1.shapeColor=("green");
    }
    
      car2.velocityX=0;
      var damage =0.5*weight1*speed1*speed1/(thickness1*thickness1*thickness1)
      if(damage<10){
        wall2.shapeColor="red";
      }
    }
  
  
  
  

  drawSprites();
}

