function setup() {
  createCanvas(600,400);
}

function draw() {
  background(0);
  //-------calls the funtion moon and stars------//
  moon(445, 200, 150); 
	star(370, 25);
	star(50, 175);
	star(115, 35);
	star(25, 44);
	star(100, 17);
	star(215, 235);
	star(418, 293);
	star(525, 370);
	star(175, 350);
	star(235, 115);
	star(444, 325);
	star(317, 200);
	star(535, 315);
	star(293, 218);
}
function moon(xloc, yloc, diam) {//declares function moon with 3 parameters
	noStroke();                     //sets no border
	fill(255, 255, 153);            //fills the circle with a certain color
	ellipse(xloc, yloc, diam);      //draws a circle
}
function star(xloc, yloc) {       //declares function star
	fill(255);                      //fill color of the circle
	ellipse(xloc, yloc, 5);         //draws a circle
} 