
var diam = 200;
var bgCol = 255;
var bgSwitch = 'rgb(255,122,122)';
var bool=false;

function setup() {
	createCanvas(400, 400);background(bgCol);}


function draw() {
  
	noStroke();
	if(bool){
	fill(255, 0, 255);}
	else{fill(random(255),random(255),random(255));}
	ellipse(width / 2, height / 2, diam, diam);
}

function mousePressed() {
	background(bgSwitch);
	noStroke();
	if(mouseX>200 && mouseX<300 && mouseY>200 && mouseY<300)
  {
    bool=!bool;
  }
 	fill(0, 0, 255);
 	ellipse(width / 2, height / 2, diam, diam);
}