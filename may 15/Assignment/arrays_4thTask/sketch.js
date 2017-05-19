/*
code created by nelgutierrez
5/16/2017

press any of the squares then the text will appear
*/


///////////////assigns value to each variable using array/////////////////////

var intro = ["Hello!", "My", "Name", "Is", "Nel"];
var versache=["So just", "turn down", "the lights", "and close", "the door"];
var randomness=["lucky for you", "that's what", "I like", "that's what", "I like"];

function setup() {
  createCanvas(1000,600);
}

function draw() {
  background(0);            //sets BG to black
  stroke(255);              //color of the vorder of the polygon
  strokeWeight(4);          //thickness of the border
  fill(255,0,0);
  rect(200, 300, 100, 100);   //draws the square shape
  rect(400, 300, 100, 100);
  rect(600, 300, 100, 100);
  
  if(mouseX>200 && mouseX<300 && mouseY>=300 && mouseY<=400)//if the mouse is pressed
  {                                                         //within the square
    if(mouseIsPressed)
    {
      for (i = 0; i < 5; i++)     //it will display the text with respect to variable intro
      {
        stroke(255);
		    fill(255);
		    textSize(38); 
		    text(intro[i], i * 100 + 200, i * 100 + 100);
      }
    }
  }
  else if(mouseX>400 && mouseX<500 && mouseY>=300 && mouseY<=400)//if the mouse is pressed
  {                                                               //within the 2nd square
    if(mouseIsPressed)
    {
      for (i = 0; i < 5; i++)//it will display the text with respect to variable versache
      {
        stroke(255);
		    fill(255);
		    textSize(38); 
		    text(versache[i], i * 100 + 200, i * 100 + 100);
      }
    }
  }
  if(mouseX>600 && mouseX<700 && mouseY>=300 && mouseY<=400)//if the mouse is pressed
  {                                                         //within the 3rd square
    if(mouseIsPressed)
    {
      for (i = 0; i < 5; i++)//it will display the text with respect to variable random
      {
        stroke(255);
		    fill(255);
		    textSize(38); 
		    text(randomness[i], i * 100 + 200, i * 100 + 100);
      }
    }
  }
}