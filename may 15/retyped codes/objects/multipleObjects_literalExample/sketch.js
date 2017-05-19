var circle = {x: 200,y: 200,diam: 50,r: 255,g: 123,b: 25}//creates an object  for the circle


var rectangle = {x: 100,y: 100,diam: 75,r: 15,g: 33,b: 225}//creates an object  for the square
function setup() {
	createCanvas(400, 400);//creates canvas with 400x400 pixels
}
function draw() {
	background(34, 123, 218); //sets BG
	noStroke();               //removes stroke or border of shape
	fill(circle.r, circle.g, circle.b); //fills color using the values given on the object
	ellipse(circle.x, circle.y, circle.diam, circle.diam);//creates circle using the values on the first object
	fill(rectangle.r, rectangle.g, rectangle.b);//fills color using the values given on the object rectangle
	rect(rectangle.x, rectangle.y, rectangle.diam, rectangle.diam);//creates square using the parameters on the 2nd object
}