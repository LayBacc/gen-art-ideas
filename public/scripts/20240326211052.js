// Reference: This code is inspired by and remixes elements from the visual loop sketches provided in your previous requests
// The inspiration comes from the dynamic, animated elements and the use of trigonometric functions to create movement.
// Twist: The animation has been converted into a monochrome theme, focusing on opacity and shades of gray instead of color.
// All animations are combined in a manner to showcase a complex, evolving monochrome pattern.

let f = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES); // Switch to degree mode for rotation
  noStroke(); // No border for shapes
}

function draw() {
  background(0);
  
  // Rotate the whole scene for dynamic view
  rotateX(f * 0.5);
  rotateY(f * 0.75);

  for (let i = -PI; i < PI; i += PI / 30) {
    for (let j = -HALF_PI; j < HALF_PI; j += PI / 30) {
      push();
      // Calculate the opacity based on the position and frame count
      let opacity = map(sin(i * j - f), -1, 1, 50, 255); 
      fill(255, opacity); // Use the calculated opacity
      
      // Dynamically calculate the sphere's position and size based on trigonometric functions
      translate(sin(i) * 100 * cos(f / 20), cos(j) * 100 * sin(f / 20), sin(i) * cos(j) * 100);
      let size = map(cos(i * j - f), -1, 1, 5, 15); 

      sphere(size);
      pop();
    }
  }
  f += 1; // Increment frame count
}