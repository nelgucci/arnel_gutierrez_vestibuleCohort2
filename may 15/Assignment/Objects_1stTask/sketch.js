/*
example of a program that uses objects
created by nel gutierrez

credits to the particle effect
by DANIEL SHIFFMAN via ----https://p5js.org/examples/simulate-particle-system.html


the program draws bomberman with the use of objects
*/

//var system;

var circle = {x: 200,y: 200,diam: 300,r: 25,g: 25,b: 112} //declares variable with its corresponding
var circle2 = {x:160, y:210, w: 10,h:60, r: 0}            //values such as x and y coordinate,
var square={x:110, y: 130, wd: 180, ht:150, rad: 60}      //width, height, and other parameters

function setup() {
  createCanvas(400,400);                                //creates canvas
  
  //////////////////////////////////////////////////////////
  //system = new ParticleSystem(createVector(240, 130)); //codes by daniel shiffman for the particle effect
}

function draw() {
  
  background('white');
  noStroke();
  fill(circle.r, circle.g, circle.b);                   //sets fill color corresponding to the values given
  ellipse(circle.x, circle.y, circle.diam, circle.diam);//draws the shape corresponding to the parameters
                                                        //that was declared on variable circle
  fill(255,255,255);
  rect(square.x, square.y, square.wd, square.ht, square.rad); //draws a square shape with respect to the
                                                              //variable square
  fill(255, 218, 185);
  rect(square.x+20, square.y+35, square.wd-40, square.ht-60, square.rad-30);
  fill(circle2.r,circle2.r,circle2.r);
  ellipse(circle2.x, circle2.y, circle2.w, circle2.h);
  ellipse(circle2.x+80, circle2.y, circle2.w, circle2.h);

////////////particle effect functions//////////////////
  //system.addParticle(); //codes by daniel shiffman for the particle effect
  //system.run();         //codes by daniel shiffman for the particle effect
}


///////////////////////not included////////////////////////////
//codes by daniel shiffman for the particle effect/////////////
// A simple Particle class
// var Particle = function(position) {
//   this.acceleration = createVector(0, 0.05);
//   this.velocity = createVector(random(-1, 1), random(-1, 0));
//   this.position = position.copy();
//   this.lifespan = 255.0;
// };

// Particle.prototype.run = function() {
//   this.update();
//   this.display();
// };

// // Method to update position
// Particle.prototype.update = function(){
//   this.velocity.add(this.acceleration);
//   this.position.add(this.velocity);
//   this.lifespan -= 2;
// };

// // Method to display
// Particle.prototype.display = function() {
//   stroke(200, this.lifespan);
//   strokeWeight(2);
//   fill(255, this.lifespan, 0);
//   ellipse(this.position.x, this.position.y, 12, 12);
// };

// // Is the particle still useful?
// Particle.prototype.isDead = function(){
//   if (this.lifespan < 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// var ParticleSystem = function(position) {
//   this.origin = position.copy();
//   this.particles = [];
// };

// ParticleSystem.prototype.addParticle = function() {
//   this.particles.push(new Particle(this.origin));
// };

// ParticleSystem.prototype.run = function() {
//   for (var i = this.particles.length-1; i >= 0; i--) {
//     var p = this.particles[i];
//     p.run();
//     if (p.isDead()) {
//       this.particles.splice(i, 1);
//     }
//   }
// };