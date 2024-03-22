let pulseSpeed = 12; // Controls the speed of the pulsing effect
let colorRange = [250, 160]; // Defines the range of the color gradient
let rotationSpeed = 48; // Controls the speed of the rotation
let cylinderRadius = 64; // Controls the radius of the cylinders
let cylinderHeight = 64; // Controls the height of the cylinders
let curveFactor = 0.002; // Controls the curvature of the shape

f=0,draw=_=>{
  f||createCanvas(W=400,W,WEBGL);
  background(0);
  rotateY(sin(f/rotationSpeed)/2);
  noStroke();
  for(z=W;z>0;z-=10){
    for(i=0;i<TAU;i+=PI/16){
      push();
      let radius =
 z * (1 + curveFactor * (W - z)); // Calculate the radius based on the curvature factor
      translate(sin(i)*radius/2,cos(i)*radius/2,-z);
      rotateZ(i+f/rotationSpeed);
      let colorValue = map(sin((z-f*pulseSpeed)/50), -1, 1, colorRange[0], colorRange[1]);
      fill(colorValue);
      cylinder(z/cylinderRadius,z/cylinderHeight);
      pop();
    }
  }
  f+=0.5;
};