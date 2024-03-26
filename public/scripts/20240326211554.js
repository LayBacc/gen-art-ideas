// Remixed and inspired by the code snippets focusing on geometry and animation loops.
// Unlike the colorful and detailed patterns of the original snippets, this one adopts
// a monochrome theme with a focus on opacity and shades of grey to create a hypnotic,
// evolving tunnel effect.

// Global frame count
let f = 0;

function setup() {
  // Create a square canvas and setup
  createCanvas(600, 600, WEBGL);
  // Set frame rate to smooth the animation
  frameRate(30);
}

function draw() {
  // Clear the background with a shade of grey
  background(20);
  // Set noFill to control shapes with stroke only
  noFill();
  
  // Depending on the frame count, rotate the whole scene for dynamic animation
  rotateX(f * 0.01);
  rotateY(f * 0.01);
  
  // Loop to create multiple rings forming a tunnel
  for (let z = -500; z < 500; z += 20) {
    // Calculate opacity based on z position to give depth, closer rings are more opaque
    let opacity = map(z, -500, 500, 30, 255);
    stroke(255, opacity);
    beginShape();
    // Draw a ring at each z position
    for (let angle = 0; angle < TAU; angle += PI / 10) {
      // Calculate the x and y position of each point around the ring
      let x = 200 * cos(angle);
      let y = 200 * sin(angle);
      // Apply a slight twist based on the frame count for dynamic motion
      let twistFactor = sin(f * 0.01 + (z * 0.02));
      vertex(x * twistFactor, y * twistFactor, z);
    }
    endShape(CLOSE);
  }
  
  // Increment the frame count to evolve the animation over time
  f++;
}