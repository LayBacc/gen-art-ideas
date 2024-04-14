// Adaptation of the provided snippets, focusing on a monochrome animation loop.
// The inspiration came from the 3D animations with rotating geometries and the mesmerizing moving patterns.
// This remix uses opacity, shades of grey, and simple geometries to create a captivating visual.

let f = 0;

function setup() {
  createCanvas(600, 600, WEBGL); // Setting up a WEBGL canvas for 3D rendering
  angleMode(DEGREES); // Use degrees for rotations for easier understanding
}

function draw() {
  background(0); // Start with a black background
  
  // Control the rotation speed and axis for the primary rotation
  rotateY(f * 0.5); // Main rotation around Y-axis
  rotateX(f * 0.3); // Additional tilt rotation around X-axis
  
  // Drawing layers of nested spheres with varying opacities and sizes
  for (let i = 0; i < 10; i++) {
    push(); // Start a new drawing state
    // Adjusting opacity using sin function to create a pulsing effect
    let alpha = map(sin(f + i * 10), -1, 1, 50, 200);
    stroke(255, alpha); // Applying the calculated opacity to the stroke
    noFill(); // No fill to focus on the outlines
    let size = i * 30; // Incrementing sizes for the spheres
    // Modulating the stroke weight to thin as the spheres get larger
    strokeWeight(map(i, 0, 10, 2, 0.5)); 
    sphere(size); // Drawing the sphere with the calculated size
    pop(); // Restore the original drawing state
  }
  
  // Increment frame count to control animation speed and effect
  f += 2;
}