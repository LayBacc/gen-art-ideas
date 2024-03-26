// This code is a twist on the example(s) provided, combining concepts from both.
// It features animated shapes that change color over time, akin to a visualization of music.
// Notice how this code incorporates dynamic movement and color changes for a creative effect.

// Setting up the canvas
function setup() {
  createCanvas(710, 400);
  noStroke();
  fill(255, 104, 204);
}

// Draws and animates circles
function draw() {
  background(51);

  // Calculating positions and sizes for two circles
  let leftCircleX = width * 0.3;
  let rightCircleX = width * 0.7;
  let circleSize = 200;

  // Making circles move up and down with sin()
  let leftCircleY = height / 2 + sin(frameCount * 0.05) * 50;
  let rightCircleY = height / 2 + sin(frameCount * 0.05 + PI) * 50; // PI phase difference makes them alternate

  // Color changes over time
  fill((sin(frameCount * 0.02) + 1) * 127.5, 104, 204);

  // Drawing circles with dynamic positions and changing color
  ellipse(leftCircleX, leftCircleY, circleSize, circleSize);
  ellipse(rightCircleX, rightCircleY, circleSize, circleSize);
}