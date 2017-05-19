/* 
Example Created by Dawn C. Hayes March 2017
and revised by Nel Gutierrez on 05/14/2017 

it makes a pendulum effect using 2 circles
*/

var circX1 = 300;//value of 1st circle on X axis
var circY1 = 200;//value of 1st circle on Y
var circX2 = 200;//value of 2nd circle on X axis
var circY2 = 200;//value of 2nd circle on Y
var circStroke = 255; //hold Stroke value
var circR = 255; 
var circG = 0;  //holds values for circles' fill color
var circB = 0;
var circSize = 50; //radius of circle

var canvBG = 225;//background value
var speed1 = 2;//discplacement for 1st circle
var speed2 = 2;//discplacement for 2nd circle
var alph = 125; // a fourth value in color, fill and background can set the alpha (opacity and transparency).


function setup(
) {
	createCanvas(500, 400);//create canvas
}


function draw() {
	background(canvBG);//sets color of BG
	strokeWeight(4);  //thickness of the border
	stroke(circStroke);//color of the border of the circle
	fill(circR, circG, circB, alph);//interior color of circle
	ellipse(circX1, circY1, circSize, circSize);//draw 1st circle
	ellipse(circX2, circY2, circSize, circSize);//draw 2nd circle
	

  circX1 = circX1 + speed1; //add speed to circle's X coordinate for it to move
	if (circX1 > width) //if the circle reaches end of canvas
	{
		speed1 = speed1 *-1;//it will change direction
	}
  else if(circX1 == 250)//if the circle reaches its initial destination
		{
		  speed1 = 0;       //it will stop
		  circX2 = circX2 - speed2;//then the 2nd circle moves in the other direction
		  if(circX2<10)//if the circle goes les than 10
		  {
		    speed2 = speed2 *-1;//it will reverse direction
		  }
		  else
		  {
		    if(circX2==200)//if it reached its initial location
		    {
		      speed2=0;//it will stop
		    }
		  }
    } 

  
}


