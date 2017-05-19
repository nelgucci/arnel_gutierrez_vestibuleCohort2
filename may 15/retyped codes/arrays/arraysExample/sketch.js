/*
example bt professor D and retyped by Nel Gutierrez

the code demonstrates the use of arrays
*/



//declare variable with values in a form of array
var playlist = ["Spoken For", "Beautiful", "Flawless", "The Generous Mr. Lovewell", "So Long Self", "Greater", "Welcome To The New", "I Can Only Imagine"];

function setup() {
	createCanvas(1200, 800);    //create canvass 1200x800 pixels
	background(255, 0, 0);      //sets BG

	for (i = 0; i < 8; i++) {   //initial 0, as long as i is less than 8, add 1 to variable i
		stroke(255);
		fill(255);    
		textSize(38); 
		text(playlist[i], i * 100 + 50, i * 100 + 50);//displays the text according to the array declared above 
	}
}

function draw() {

}

