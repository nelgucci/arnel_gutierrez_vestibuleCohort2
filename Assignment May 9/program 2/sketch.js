

/*for what i learned, those two (function setup() and
function draw() is there at default and should always
be present in a sketch even if it is blank*/


function setup() {
  createCanvas(300,300);  //will make something like a 
                          //window with a size of 300x300pixels
}
var value = 0;  //declare the variable and set its value
function draw() {
  background('black');  //will set the background color 
                        //of the canvas to black
  stroke(255, 255, 0);  //sets the color of the border of the shape
  strokeWeight(3);      //sets the border of a shape
  fill(255, 35, 125);   //sets the color to fill shapes
  ellipse(160, 80, 20, 20); //draws a cirlce with the displacement of
                            //x:160 y:80 with the width and height of 20
  
  
  stroke(255, 255, 0); //sets the color of the border of the arc
  fill(value);        ////sets the color to fill the arc with the variable name "value"
  arc(150, 100, 80, 80, 0, PI+QUARTER_PI, PIE); //draws a closed arc
  
  ellipse(131, 100, 5, 5);
}

function mouseMoved() {
  value = value + 5; //whenever you move your mouse, the value increases by 5
  if (value > 255)  //when the value exceeds 255
  {
    value = 0;      //it will return the value to zero
  }
}