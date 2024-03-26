// This is a combination and remix of the elements from the two p5.js examples provided earlier
// The idea is to create a sketch that dynamically generates circles with random sizes and colors
// where the circles increase in size based on mouse movement, integrating elements from both examples

let circleSize = 10; // Initial size of the circle

function setup() {
  createCanvas(600, 400); // Set the canvas size
  noStroke(); // No outline around shapes
}

function draw() {
  background(220); // Set the background color

  let noiseFactor = noise(mouseX * 0.02, mouseY * 0.02); // Use Perlin noise for more organic randomness
  
  // Dynamically change the fill color based on mouse position
  fill(mouseX, noiseFactor * 255, mouseY, 125); // Semi-transparent
  
  // The circle grows in size relative to the distance from the center
  circleSize = noiseFactor * 66 + (dist(mouseX, mouseY, width / 2, height / 2) / 8);
  
  // Draw the circle at the mouse position with the dynamically changing size
  circle(mouseX, mouseY, circleSize);
  
  // Every frame, slightly alter the base circle size to create a pulsing effect
  circleSize += sin(frameCount * 0.1);
}