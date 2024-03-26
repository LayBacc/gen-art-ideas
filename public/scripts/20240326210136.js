// This code remixes elements from the Twitter snippet animations by adding a monochrome theme
// and experimenting with shapes and movement patterns for an elegant visual effect. Instead of colors,
// it makes creative use of opacity and shades of grey to achieve a visually pleasing monochrome animation loop.

let f = 0; // Frame counter

function setup() {
  createCanvas(800, 800, WEBGL); // Set up the canvas in 3D mode
  angleMode(DEGREES); // Change the angle mode to degrees for intuitive rotations
}

function draw() {
  background(0); // Set the background to black for the monochrome theme
  noFill(); // No fill to use only stroke for shapes, emphasizing the monochrome theme
  let maxFrames = 120; // Total frames for one loop of the animation

  for (let i = 0; i < 360; i += 15) { // Loop to create multiple lines/shapes
    push();
    let sinFactor = sin(f + i); // Calculate a sin factor for dynamic movement
    rotateX(f * 0.3); // Rotate on X axis for a 3D effect
    rotateY(f * 0.3); // Rotate on Y axis for complexity

    // Create an elliptical ring with varying opacity and stroke weight
    stroke(255, map(abs(sinFactor), 0, 1, 64, 255)); // Use stroke for shades of grey
    strokeWeight(map(abs(sinFactor), 0, 1, 1, 5)); // Varying stroke weight for visual depth
    ellipse(sin(i) * 200, cos(i) * 200, 200 + sinFactor * 100, 200 + sinFactor * 100);

    pop();
  }

  f += 360 / maxFrames; // Increment frame counter for smooth animation
  if (f > 360) {
    f = 0; // Reset frame counter to loop the animation
  }
}