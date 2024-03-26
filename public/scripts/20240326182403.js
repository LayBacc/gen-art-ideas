// Inspired by the previous two example snippets, this p5.js code incorporates elements from both
// It utilizes the concept of drawing shapes from the first example and integrates mouse interaction from the second
// This new sketch creates an interactive canvas where the shapes follow the mouse cursor and change colors dynamically

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  noStroke();
}

function draw() {
  // Changing background to create a trail effect
  background(220, 20);

  let colorPicker = color(mouseX % 255, mouseY % 255, (mouseX + mouseY) % 255);
  fill(colorPicker);

  // Drawing a circle that follows the mouse cursor
  circle(mouseX, mouseY, 50);

  // Adding a rectangle that moves inversely to the mouse for added effect
  let inverseX = width - mouseX;
  let inverseY = height - mouseY;
  rect(inverseX - 25, inverseY - 25, 50, 50);
}

// Uses the windowResize listener to adjust canvas size dynamically
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}