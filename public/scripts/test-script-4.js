// A unique twist on the classic example of creating a moving, colorful shape
// Inspired by basic shape and color manipulation in p5.js

function setup() {
  createCanvas(800, 400);
  noStroke();
}

function draw() {
  background(220);

  // Dynamic color effect based on the mouse position
  let fillColor = color(mouseX % 255, mouseY % 255, (mouseX + mouseY) % 255);
  fill(fillColor);

  // Ellipse size changes based on the vertical mouse position
  let size = map(mouseY, 0, height, 10, 200);

  // Drawing an ellipse that follows the mouse cursor
  ellipse(mouseX, mouseY, size, size);

  // Adding an interactive twist - press the mouse button to draw a rectangle
  if (mouseIsPressed) {
    fill(255, 0, 0); // red color for the rectangle
    rect(mouseX - size / 2, mouseY - size / 2, size, size);
  }
}

// This example is a creative blend of mouse interaction, color, and shape manipulation
// It references basic drawing functions (ellipse, rect) and color (fill) manipulation from p5.js examples