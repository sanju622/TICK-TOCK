function setup() {
  createCanvas(800,400);
   hr = hour();
   mn = minute();
   sc = second();
}

function draw() {
  background(255,255,255); 
  scAngle = map(sc, 60, 0 , 360)
  mnAngle = map(mn, 60, 0 , 360)
  hrAngle = map(hr, 60, 0 , 360)
  Stroke(250,0,0);
  StrokeWeight(7);
  Line(0,0,100,0);
  push();
  Rotate(scAngle);
  stroke(255,0,0);
  StrokeWeight(7);
  Line(0,0,100,0);
  pop();
   Stroke(250,0,0);
   StrokeWeight(7);
   Line(0,0,100,0);
   push();
   Rotate(mnAngle);
   stroke(255,0,0);
   StrokeWeight(7);
   Line(0,0,100,0);
   pop();
   Stroke(250,0,0);
   StrokeWeight(7);
   Line(0,0,100,0);
   push();
   Rotate(hrAngle);
   stroke(255,0,0);
   StrokeWeight(7);
   Line(0,0,100,0);
   pop();
  drawSprites();
}