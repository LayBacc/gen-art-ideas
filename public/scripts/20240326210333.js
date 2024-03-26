// Referencing the first two p5.js snippets provided, this remix creates a unique generation of moving shapes
// with emphasis on monochrome aesthetics, opacity, and shades of grey instead of colors.
// The concept of rotation, pulsing, and dynamic creation of shapes was integrated.

let pulseSpeed = 0.02; // Controls the speed at which the shapes pulse
let rotationSpeed = 0.05; // Controls the speed of rotation
let numOfShapes = 50; // Define the number of shapes to be drawn

function setup() {
  createCanvas(800, 800, WEBGL);
  angleMode(DEGREES);
  noFill();
}

function draw() {
  background(0);
  
  let dynamicOpacity = map(sin(frameCount * pulseSpeed), -1, 1, 50, 255);
  stroke(255, dynamicOpacity); // Use dynamic opacity for visual effect

  rotateY(frameCount * rotationSpeed);

  for (let i = 0; i < numOfShapes; i++) {
    push();
    let angle = map(i, 0, numOfShapes, 0, 360);
    let radius = sin(frameCount + i * 2) * 200; // Sinusoidal variation for dynamic movement
    translate(sin(angle) * radius, cos(angle) * radius, i * 0.1);
    rotateX(frameCount * rotationSpeed * 0.5);
    rotateY(frameCount * rotationSpeed * 0.5);
    
    // Drawing torus with varying sizes and opacity
    let size = map(sin(frameCount + i), -1, 1, 10, 50);
    stroke(255, map(i, 0, numOfShapes, 0, 255)); // Fading effect based on the shape's index
    torus(size + 10, 3);
    pop();
  }
  
  // Increment the rotation and pulsing effect
  pulseSpeed += 0.0001;
  rotationSpeed += 0.0001;
}