/*
code created by nel gutierrez
5/16/2017

uses 2 functions that creates a circle where ever 
the mouse is then changes color when pressed 
*/
function setup() {
  createCanvas(500,500);      //creates canvas
}

function draw() {
  background('grey');
  mouseMoved();               //starts a function
  circ2();                    //2nd function
}

function mouseMoved()         //declaring a function that will
{                             //create a circle with respect to the currrent 
  stroke(255);                //position of the mouse
  strokeWeight(4);
  fill(255,0,0);
  ellipse(mouseX,mouseY,50,50); 
}
function circ2()              //declaring a function that 
{                             //if the mouse is pressed
    if(mouseIsPressed)        //the circle will change its color
  {
  stroke(255);
  strokeWeight(4);
  fill(255,112,0);
  ellipse(mouseX,mouseY,50,50);     
  }
}
function mouseIsPressed()
{
  
}