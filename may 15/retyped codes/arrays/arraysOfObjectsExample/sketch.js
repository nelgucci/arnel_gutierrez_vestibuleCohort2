
var stars = []; // declares an empty array
var moon;       //declare variable moon


function setup() 
{
  createCanvas(600, 400);

  for (var i = 0; i < 400; i++) 
    { 
    stars[i] = {x1: random(0, width), y1: random(0, height), //object that uses array
    display: function() {stroke(random(225));point(this.x1, this.y1);}
    }
  }
  moon = {x: 100, y: 350, diam: 100, xspeed: .5, yspeed: .5}  //object declaring values for its x, y coordinate
                                                              //diameter and displacement
  cloud = {x: 50, y: 150, diam: 75, col: 255}   //object for the values of the cloud variables
}

function draw() {
  background(0, 14, 35);              //sets background
  for (var i = 0; i < stars.length; i++) {//for loop that starts with zero and as long as var i is less than
                                          //the length value of variable array star which is 400
    stars[i].display();                   //displays random points around the canvas with random fill(black/white)
  }
  noStroke();
  fill(225, 225, 134);
  ellipse(moon.x, moon.y, moon.diam, moon.diam); //creates the moon


//condition that makes the moon move throughout the canvas
  if (moon.x > 0 || moon.x < width && moon.y > 0 || moon.x < height) {
    moon.x = moon.x + moon.xspeed;
    moon.y = moon.y - moon.yspeed;
  }

  noStroke();
  fill(cloud.col);
  ellipse(cloud.x, cloud.y, cloud.diam, cloud.diam);
  ellipse(cloud.x + 30, cloud.y - 15, cloud.diam, cloud.diam + 35);
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);
  ellipse(cloud.x, cloud.y + 10, cloud.diam, cloud.diam);
  ellipse(cloud.x + 30, cloud.y + 15, cloud.diam + 70, cloud.diam);
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);

  noStroke();
  fill(cloud.col);
  ellipse(cloud.x, cloud.y, cloud.diam, cloud.diam);
  ellipse(cloud.x + 90, cloud.y - 15, cloud.diam, cloud.diam + 70);
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);
  ellipse(cloud.x, cloud.y + 10, cloud.diam, cloud.diam);
  ellipse(cloud.x + 90, cloud.y + 15, cloud.diam + 70, cloud.diam);
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);

}