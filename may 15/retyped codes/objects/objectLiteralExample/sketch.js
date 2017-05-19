var circle = {x: 200,y: 200,diam: 50,r: 255,g: 123,b: 25}//creates object with parameters

function setup() {
  createCanvas(400,400);//creates canvas
}

function draw() {
  background(34, 123, 218);//sets BG
  noStroke();//removes stroke from the drawing
	fill(circle.r, circle.g, circle.b);//sets color of the shape using the values on the object declared above
	ellipse(circle.x, circle.y, circle.diam, circle.diam);//creates circle using the parameters on the object
}