/*
code design created by nel gutierrez
credits to Keith Peters for the "follow" cursor effect

reference link: https://p5js.org/examples/interaction-follow-1.html
*/

var x = 100, y = 100, angle1 = 0.0, segLength = 50;

//////////declaring object///////////
var arcX = {a:80, b:340, c:'PI+QUARTER_PI+QUARTER_PI+QUARTER_PI', d:'PIE',
  
  //declared function within the object as instructed
  segment: function(x,y,a)//function that lets the drawing follow the cursor
  {
    push();
    translate(x, y);
    rotate(a);
    line(0, 0, segLength, 0);
    pop();
  }
};

function setup() {
  createCanvas(500,500);  //will make something like a 
                          //window with a size of 300x300pixels
}
function draw() {
  background('black');  //will set the background color 
                        //of the canvas to black

  dx = mouseX - x;
  dy = mouseY - y;
  angle1 = atan2(dy, dx);
  x = mouseX - (cos(angle1) * segLength);
  y = mouseY - (sin(angle1) * segLength);

  stroke(255, 255, 0); //sets the color of the border of the arc
  fill(255, 255, 0);        ////sets the color to fill the arc with the variable name "value"
  arc(x, y, arcX.a, arcX.a, arcX.b, PI+QUARTER_PI+QUARTER_PI+QUARTER_PI, PIE);//using the
                                            //values from the variable arcX
  stroke(0, 0, 0)
  strokeWeight(3);
  fill(0, 0, 0);
  ellipse(x, y-20, 7, 7);   //Draws the eye of pacman with respect to the mouse coordinates
  
}


// function segment(x, y, a) {//function that lets the drawing follow the cursor
//   push();
//   translate(x, y);
//   rotate(a);
//   line(0, 0, segLength, 0);
//   pop();
// }

