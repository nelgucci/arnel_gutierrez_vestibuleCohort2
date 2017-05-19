/*
example codes by professor D

*/



var on =false;        //creates the variable on with a boolean value of false

function setup() {
  createCanvas(600, 400); //creates canvas
}

function draw() {
  if (on){                
    background(0,255,0);  //sets background in on variable
  }
  else
  {
    background(255,0,0);  //if on changes boolean value to false, the BG changes
  }
  
  stroke(255);      //sets border color
  strokeWeight(4);  //sets border thickness
  noFill();
  
  if(mouseX>250 && mouseX<350 && mouseY>150 && mouseY<250)  //if mouse pointer is within the square
  {
    fill(255,0,200);                                        //fills the square with a certain color
  }
  else
  {
    fill(random(255),random(255),random(255));            //otherwise, it fills it with random colors
  }
  rectMode(CENTER);               //changes the first 2 parts of rect funtion to center of the square
  rect(300,200,100,100);          //creates a square
}

function mousePressed()           //if mouse is pressed inside the squre
{
  if(mouseX>250 && mouseX<350 && mouseY>150 && mouseY<250)
  {
    on=!on;                       //it will change the boolean value of 'on' to true
  }
}