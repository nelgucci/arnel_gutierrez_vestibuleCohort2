

/*for what i learned, those two (function setup() and
function draw() is there at default and should always
be present in a sketch even if it is blank*/


function setup() {
  createCanvas(400,400);  //will make something like a 
                          //window with a size of 300x300pixels
}
function draw() {
  background('black');  //will set the background color 
                        //of the canvas to black
  stroke(255, 255, 0); //sets the color of the border of the arc
  fill(255, 255, 0);        ////sets the color to fill the arc with the variable name "value"
  arc(300, 100, 80, 80, 340, PI+QUARTER_PI+QUARTER_PI+QUARTER_PI, PIE); //draws a closed arc
 
 
  stroke(0, 0, 0)
  strokeWeight(3);
  fill(0, 0, 0);
  ellipse(300, 75, 7, 7);    //Draws the eye of pacman
  
  
  stroke(0, 0, 255); //sets the color of the border of the arc
  fill(0, 0, 255);    //sets the fill color of the arc
  arc(100, 100, 80, 80, -PI, PI, OPEN);
  arc(73, 100, 27, 80, 0, PI, OPEN);        //I used 4 arcs combined together to draw the Ghost. lol
  arc(127, 100, 27, 80, 0, PI, OPEN);
  arc(100, 100, 27, 80, 0, PI, OPEN);
  
  /////////----------I used a circle and the point function for the eyes of the ball---------------////////////
  stroke(255, 255, 255);
  strokeWeight(3);      
  fill(255, 255, 255);   
  ellipse(105, 82, 10, 10);
  ellipse(125, 82, 10, 10);
  
  stroke(0, 0, 0)
  strokeWeight(6);
  point(107, 82);
  point(127, 82);
  
}

