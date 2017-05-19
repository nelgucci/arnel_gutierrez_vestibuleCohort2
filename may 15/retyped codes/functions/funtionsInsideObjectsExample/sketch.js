var float1 = {x1: 50, y1: 0, x2: 150, y2: 90, speed: 2,//declares object float1
	display: function() {                                //creates  function within object
		stroke(random(255), random(255), random(255));    //sets stroke to random color
		strokeWeight(2);                                  //thickness of line
		line(this.x1, this.y1, this.x2, this.y2);},       //gets value of x1,y1,x2,y2 within the object
	move: function() {                                  //creates move function
		this.x1 = this.x1 + this.speed;                   //Adds value to x1 for it to move
		this.y1 = this.y1 + this.speed;                    //Adds value to y1 for it to move
		this.y2 = this.y2 + this.speed;                    //Adds value to y2 for it to move
	} 
}

var float2 = {//declares object float 2
	x1: 400,
	y1: 200,
	x2: 500,
	y2: 300,
	speed: 2,
	display: function() {//creates display function similar to the first object
		stroke(random(255), random(255), random(255));
		strokeWeight(2);
		line(this.x1, this.y1, this.x2, this.y2);
	},
	move: function() {//creates move function similar to the first object
		this.x1 = this.x1 + this.speed;
		this.y1 = this.y1 + this.speed;
		this.y2 = this.y2 + this.speed;
	}
}

function setup() {
	createCanvas(600, 400);//creates the size of the canvas
}

function draw() {
	background(0);    //sets BG to black
	float1.move();     //calls the function move from object float1
	float1.display();//calls the function display from object float1
	float2.move();//calls the function move from object float2
	float2.display();//calls the function display from object float2
}