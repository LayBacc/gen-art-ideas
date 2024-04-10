// Reference: First p5.js code snippet provided
// Twist: Transformation into a monochrome animation loop with opacity and shades of grey instead of colors
// Additional elements from third code snippet provided: Rotation and sphere patterns for a 3D effect

let pulseSpeed = 16;
let brightnessRange = [0, 255]; // Used for controlling shades of grey instead of color
let rotationSpeed = 20;
let cylinderRadius = 120;
let cylinderHeight = 64;
let curveFactor = 0.00048;
let f = 0;

function setup() {
  createCanvas(800, 800, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  rotateY(sin(f / rotationSpeed) / 4);
  noStroke();
  
  for (let z = 0; z < width * 2; z += 80) { // Adjusted range for a more condensed effect
    for (let i = 0; i < TAU; i += PI / 16) {
      push();
      let radius = width * 0.06 + curveFactor * z * z; // Using a fixed value for narrowFactor for clarity
      translate(sin(i) * radius, cos(i) * radius, -z);
      rotateZ(i + f / rotationSpeed);
      
      let brightnessValue = map(sin((z - f * pulseSpeed) / 50), -1, 1, brightnessRange[0], brightnessRange[1]);
      fill(brightnessValue, brightnessValue, brightnessValue, 150); // Using shades of grey with opacity
      
      sphere(width / cylinderRadius); // Switched to sphere for a 3D effect on the animation
      pop();
    }
  }
  f += 0.5;
}