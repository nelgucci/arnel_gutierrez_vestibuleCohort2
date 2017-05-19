/*
example codes by professor D
and revised by nel gutierrez may 15, 2017
*/


function setup() {
  createCanvas(600,400);    //creates canvas, 600x400 pixels
}

function draw() {
  background(0);            //sets BG to black
  stroke(255);              //color of the vorder of the polygon
  strokeWeight(4);          //thickness of the border
  noFill();                 //sets no fill to the polygon
    
  
  if(mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY <300) //if the coordinates of the mouse is in the square
  {
    if(mouseIsPressed)                                            //and the mouse is pressed
    {
      background(random(255),255,0);                              //BG will change to random colors
      stroke(255);
      strokeWeight(4);
      fill(255,0,0);
      ellipse(mouseX,mouseY,250,250);                             //and creates a circle behind the square
    }
    fill(255,0,200);                                              //also fills color pink to the square
  }
  rect(300, 200, 100, 100);   //draws the square
}