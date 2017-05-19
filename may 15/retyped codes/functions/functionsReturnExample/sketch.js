function setup() {
    var km = milesToKm(26.3); //declares variable km calling the function milesToKm
 console.log(km);             //displays output to console
  
  var km2 = milesToKm(100);//declares variable km2 calling the function milesToKm
  console.log(km2);//displays output to console
}
function draw() {}

function milesToKm(miles) {//creates funtion
  var km = miles * 1.6;     //that adds 1.6 to the created parameter
  return km;                //returns value of km
}