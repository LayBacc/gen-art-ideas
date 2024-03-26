// This code references the structure and geometric manipulations found in the given p5.js sketches,
// specifically the third and fourth snippets provided, and remixes those ideas into a new creation.
// It focuses on monochrome animation loops, utilizing opacity and shades of grey instead of colors
// to create visually captivating patterns. The twist here lies in combining rotation,
// transparency, and scale to fashion a dynamic, evolving piece.

let f = 0;

function setup() {
  createCanvas(600, 600, WEBGL); // Setting up a WEBGL canvas for 3D rendering
  angleMode(DEGREES); // Using degrees for rotation calculations
}

function draw() {
  background(0); // Black background for contrast
  noFill(); // No fill to emphasize stroke effects
  
  rotateY(f * 0.5); // Rotation over time creates dynamism
  
  let opacity = 255; // Starting opacity for the outermost shapes

  for (let i = 0; i < 6; i++) { // Creating a series of concentric geometry
    stroke(255, opacity); // Using stroke with decreasing opacity
    strokeWeight(2); // Consistent stroke weight for visual cohesion

    push(); // Isolating transformations
    rotateY(sin(f + i * 10) * 20); // Adding rotation with variance
    rotateX(sin(f + i * 10) * 20); // Adding another rotation axis for complexity

    // The shape morphs as 'f' increases, varying size and number of vertices dynamically
    beginShape();
    for (let j = 0; j < TAU; j += PI / 16) {
      let r = map(sin(j * 4 + f), -1, 1, 50, 200); // Dynamic radius for undulating shape
      let x = r * cos(j);
      let y = r * sin(j);
      vertex(x, y); // Placing vertices in a circle
    }
    endShape(CLOSE);

    pop(); // Reset transformations for the next iteration

    opacity -= 40; // Decrease opacity to reinforce depth perception
  }

  f += 1; // Increment frame count to animate
}