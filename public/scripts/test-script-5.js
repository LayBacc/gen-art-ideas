// Drawing a bouncing ball with a twist: changing colors as it moves.
// Inspired by the concepts from the examples: "Bouncing ball with no gravity" and "Static shapes with colors".

let ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3,
  size: 24,
  color: 'blue'
};

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  // Call the ball functions
  move();
  bounce();
  display();
}

function move() {
  // Move the ball by updating the position
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}

function bounce() {
  // Change direction when it hits an edge
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
  
  // Change color on bounce
  ball.color = randomColor();
}

function display() {
  // Display the ball
  stroke(255);
  fill(ball.color);
  ellipse(ball.x, ball.y, ball.size, ball.size);
}

function randomColor() {
  // Generate a random color
  return color(random(255), random(255), random(255));
}