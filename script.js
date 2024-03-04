function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);

  //this is a call to myShape()
  myShape(width/2, height/ 2, 1);
  // myShape() takes three arguments
  myShape(100,200,60,80)
  myShape(400,100,70,100)
  myShape(150,200,50,70)
  myShape(300,200,40,60)
  // arg1: horizontal location
  // arg2: vertical location
  // arg3: scale factor (1 is full size)
  /* add two more calls to myShape that draw your shape in different locations
  */
  
}

function myShape(x, y, w, h) {
  // make this function more interesting
  push(); // make a separate layer
  translate(x, y); // move the origin point
  scale(.5);
  
  ellipse(0, 0, w, h); // simple ellipse at the translated origin (0,0)
  
  pop(); // dispose of the layer
}
