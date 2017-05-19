
var diam = 200;       //creates variable diam with value of 200
var bgCol = 255;      //creates variable bgCol with value of 255
var bgSwitch = 0;     //creates variable bgSwitch with value of 0

function setup() {
	createCanvas(400, 400); //creates canvas
	background(bgCol);      //sets BG with respect to the value of variable bgCol
	noStroke();             //sets no border to the drawing
	fill(255, 0, 0);        //fills the shape
	ellipse(width / 2, height / 2, diam, diam);   //draws circle 
}
function draw() {}

function mousePressed() //when mouse is pressed
{ 
	background(bgSwitch);  //change BG
	noStroke();           
	fill(0, 0, 255);//and changes the fill color of the circle
	ellipse(width / 2, height / 2, diam, diam);
}