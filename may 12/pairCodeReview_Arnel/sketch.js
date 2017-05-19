/*
This is the pair project work of Daniel as Driver
and Arnel as the typer

the code would make a face with moving eyes
a simple project but a very creative one in my opinion
*/

eye1 = 220; //holds X coordinate of the 1st eye
eye2 = 320; //holds X coordinate of the 2nd eye
speed1 = 1; //speed of the movement of the eye


function setup() {
  createCanvas(500,500); //creates canvas with 500x500 pixels
  background('grey');   //sets BG color to grey
}

function draw() 
{
  strokeWeight(5);      //thickness of the outer circle which makes the face
  fill(random(255), random(255), random(255));  //randomly fill the color of the face, although it's interesting to watch
                                                //the face to change color, it would be better to add a code
                                                //to decrease the time it takes to change color
  ellipse(250, 250, 300, 300);//draw the outer circle
  
  strokeWeight(5);    //thickness of the circle which makes the eyeballs
  fill('white');      //sets color of the BG
  ellipse(200, 220, 80, 80);  //draws the eyeball
  ellipse(300, 220, 80, 80);  //draws the 2nd eyeballs
  
  strokeWeight(4);    //thickness of the circle which makes the pupils
  fill('black');      //sets color of the pupil
  ellipse(eye1, 220, 30, 30);   //draws the 1st pupil
  ellipse(eye2, 220, 30, 30);   //draws the 2nd pupil
  
  eye1 = eye1 + speed1;       //adds the value of speed to the x coordinate of the pupil
  eye2 = eye2 + speed1;
  
  if((eye1>=225||eye1<=175)&&(eye2>=325||eye2<=300))//if the pupil reaches the border of the eyes
  {
    speed1=speed1 *-1;          //it will change its direction
  }
  
  strokeWeight(0);
  fill('black');
  ellipse(250, 300, 40, random(40));  //draws the mouth with its width as a random value which adds a talking effect
}