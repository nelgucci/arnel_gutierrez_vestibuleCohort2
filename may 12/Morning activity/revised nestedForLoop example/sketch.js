/*  
nested loop that draws circles with different dimensions to the canvas. 
example by Dawn C. Hayes March, 2017
and revised by nel gutierrez
*/


function setup() {
	createCanvas(600,600);//creates canvas
	
}

function draw() {
  background(0, 64, 135); //sets BG
	strokeWeight(2);//thickness of the border of the circle
	//stroke(255);

	for (var i = width; i >= 0; i -= 50) { // variable I will hold the value for the width of the circle
		for (var j = height; j >= 0; j -= 50) { // variable J will hold the value for the height of the circle
			fill(random(255), random(255), random(255)); // fill random color
			ellipse(300, 300, i, j); // draw at position 300x300 which is the center
			                          //creates circles with diff dimensions
		}
	}
}