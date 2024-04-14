// Inspired by the 3D geometries and rotations in the snippets provided, this code remixes aspects of them and introduces a monochrome animation loop with a focus on opacity and shades of grey to create a visually striking effect.

let f = 0; // Frame count for animation

function setup() {
  createCanvas(600, 600, WEBGL); // Set up a WEBGL canvas
  angleMode(DEGREES); // Use degrees for rotations
}

function draw() {
  background(0); // Clear canvas with black background for each frame
  rotateY(f * 0.2); // Apply a Y-axis rotation based on frame count for dynamic movement

  // Loop to create a series of rotating spheres
  for (let theta = 0; theta < 360; theta += 45) { // Outer loop for angle around Y-axis
    for (let phi = -80; phi <= 80; phi += 40) { // Inner loop for angle along the Z-axis
      push(); // Isolate transformations

      let greyScale = map(sin(f), -1, 1, 50, 255); // Dynamically adjust grey scale based on sin of frame count
      let opacity = map(cos(f + theta), -1, 1, 50, 255); // Dynamically adjust opacity based on cos of frame count + current theta
      let size = map(cos(f + phi), -1, 1, 5, 20); // Dynamically adjust sphere size

      // Calculate spherical coordinates
      let x = 200 * cos(theta) * sin(phi);
      let y = 200 * sin(theta) * sin(phi);
      let z = 200 * cos(phi);

      translate(x, y, z); // Move to position
      fill(greyScale, greyScale, greyScale, opacity); // Set fill color to grey scale with calculated opacity
      sphere(size); // Draw sphere with calculated size
      
      pop(); // Restore original state
    }
  }

  f += 0.5; // Increment frame count
}