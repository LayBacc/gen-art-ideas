// This snippet is a remix of the geometric visualization with rotation, originally seen in the examples involving 3D rotations and geometrical shapes.
// This version converts the visual into a monochrome animation loop with emphasis on opacity and shades of grey instead of color.
// We focus on a simpler geometry - spheres - and add an opacity effect to create depth and variation.

let f = 0; // Frame counter

function setup() {
  createCanvas(800, 800, WEBGL); // Set up a WEBGL canvas
  noStroke(); // No borders around shapes
}

function draw() {
  background(0); // Black background
  rotateY(f * 0.01); // Rotate the whole scene along the Y axis

  // Loop to create multiple spheres at various positions
  for (let x = -400; x < 400; x += 50) {
    for (let y = -400; y < 400; y += 50) {
      push(); // Start a new drawing state
      let d = dist(x, y, 0, 0); // Distance from center
      let scaleVar = map(d, 0, 566, 0, 255); // Map distance to opacity
      fill(scaleVar); // Set fill to shade of grey depending on distance
      translate(x, y, -d * 0.1 + sin(f * 0.02 + d * 0.01) * 100); // Move position in 3D space
      sphere(20); // Draw sphere
      pop(); // Restore original state
    }
  }

  f++; // Increase frame count
}