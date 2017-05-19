

/*for what i learned, those two (function setup() and
function draw() is there at default and should always
be present in a sketch even if it is blank*/

var pacmanX = 300;

var ghostX1 = 100;
var ghostX2 = 73;
var ghostX3 = 127;
var ghostX4 = 100;

var ghosteyeballX = 105;
var ghosteyeballY = 125;
var ghostpointX = 107;
var ghostpointY = 127;

function setup() {
  createCanvas(1000,400);  //will make something like a 
                          //window with a size of 300x300pixels
}
function draw() {
  background('black');  //will set the background color 
                        //of the canvas to black
  stroke(255, 255, 0); //sets the color of the border of the arc
  fill(255, 255, 0);        ////sets the color to fill the arc with the variable name "value"
  arc(pacmanX, 100, 80, 80, 340, PI+QUARTER_PI+QUARTER_PI+QUARTER_PI, PIE); //draws a closed arc
 
  
  stroke(0, 0, 0)
  strokeWeight(3);
  fill(0, 0, 0);
  ellipse(pacmanX, 75, 7, 7);   //Draws the eye of pacman
  
  
  stroke(0, 0, 255); //sets the color of the border of the arc
  fill(0, 0, 255);  
  arc(ghostX1, 100, 80, 80, -PI, PI, OPEN);      //I used 4 arcs combined together to draw the Ghost.
  arc(ghostX2, 100, 27, 80, 0, PI, OPEN);
  arc(ghostX3, 100, 27, 80, 0, PI, OPEN);
  arc(ghostX4, 100, 27, 80, 0, PI, OPEN);
  
  /////////----------I used a circle and the point function for the eyes of the ball---------------////////////
  
  stroke(255, 255, 255);  //sets the color of the border of the shape
  strokeWeight(3);      //sets the border of a shape
  fill(255, 255, 255);   //sets the color to fill shapes
  ellipse(ghosteyeballX, 82, 10, 10);
  ellipse(ghosteyeballY, 82, 10, 10);
  
  stroke(0, 0, 0)
  strokeWeight(6);
  point(ghostpointX, 82);
  point(ghostpointY, 82);
  
  pacmanX=pacmanX+2;
  ghostX1=ghostX1+1;
  ghostX2=ghostX2+1;
  ghostX3=ghostX3+1;
  ghostX4=ghostX4+1;
  ghosteyeballX=ghosteyeballX+1;
  ghosteyeballY=ghosteyeballY+1;
  ghostpointX=ghostpointX+1;
  ghostpointY=ghostpointY+1;
}

