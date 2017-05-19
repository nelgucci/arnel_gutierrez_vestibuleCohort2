/* 
Example Created by Dawn C. Hayes March 2017. 
revised by Nel Gutierrez on 5/14/2017

a project that makes a circle bounce around throughout the canvas

*/

var circX = 300; //value of 1st circle on X axis
var circY = 150; //value of 1st circle on Y
var circStroke = 125; //hold Stroke value
var circR = 55; 
var circG = 135; //holds values for circles' fill color
var circB = 225; 
var circSize = 75;//radius of circle

var canvBGR = 125;//background value R
var canvBGG = 55;//background value G
var canvBGB = 255; //background value B
var speedx = 2;//x displacement
var speedy = 3;//y discplacement



function setup() {  
	createCanvas(400, 400); //creates canvas with 400x400 pixels
	background(canvBGR, canvBGG, canvBGB); //sets BG or canvass
}


function draw() {

	stroke(circStroke); //color of the border of the circle
	fill(random(255), random(255), random(255));  //interior color of circle set to random
	ellipse(circX, circY, circSize, circSize);  //creates the circle usng the variables

	
	circX = circX + speedx; //speed x and y will make the circle travel to a slant direction
	circY = circY + speedy;			   

    
    if(circX > width || circX < 0) { //if the circle reaches the end of the canvas with respect to x
    	speedx = speedx *-1;}//it will change direction
    	
    if(circY > height || circY < 0){speedy = speedy *-1}//if the circle reaches the end of 
                                                        //the canvas with respect to y coordinates
                                                        //it will change direction
}