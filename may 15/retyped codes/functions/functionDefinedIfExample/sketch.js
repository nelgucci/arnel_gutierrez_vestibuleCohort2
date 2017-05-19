var blip = {x: 300, y: 200, xspeed: 4, yspeed: -3}//declares an object named blip

function setup() {
  createCanvas(600,400);//creates canvas
  background(0);//sets background
}

function draw() {
  move();     //calls for the function move
  bounce();   //calls for the function bounce
  display();  //calls for the function display
}

function bounce() {//function bounce

	if (blip.x > width || blip.x < 0) {//if x coordinate of blip is greater than 600 or less than 0
		blip.xspeed = blip.xspeed * -1; //it will change direction with respect to x
		background(random(255), random(255), random(255));  //and changes BG to a random color
	}

	if (blip.y > height || blip.y < 0) {//if y coordinate of blip is greater than 400 or less than 0
		blip.yspeed = blip.yspeed * -1;//it will change direction with respect to y
		background(random(255), random(255), random(255));//and changes BG to a random color
	}
}
function move() {//function move
	blip.x = blip.x + blip.xspeed;//adds the value of xspeed to x coordinate for it to move
	blip.y = blip.y + blip.yspeed;//adds the value of yspeed to y coordinate for it to move
}
function display() {//function display
	strokeWeight(2);
	stroke(255);
	point(blip.x, blip.y);//displays a point
}