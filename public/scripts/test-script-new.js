let pulseSpeed = 12; // Controls the speed of the pulsing effect
let colorRange = [250, 160]; // Defines the range of the color gradient
let rotationSpeed = 48; // Controls the speed of the rotation
let cylinderRadius = 64; // Controls the radius of the cylinders
let cylinderHeight = 64; // Controls the height of the cylinders
let curveFactor = 0.002; // Controls the curvature of the shape

let f = 0; // Frame counter

// Setup function: runs once at the start of the sketch
function setup() {
  // Create a 400x400 WEBGL canvas
  createCanvas(400, 400, WEBGL);
}

// Draw function: runs repeatedly to create the animation
function draw() {
  // Set the background to black
  background(0);

  // Rotate the scene based on the frame counter and rotation speed
  rotateY(sin(f / rotationSpeed) / 2);

  // Disable stroke for the shapes
  noStroke();

  // Loop to create layers of cylinders from back to front
  for (let z = width; z > 0; z -= 10) {
    // Inner loop to place cylinders around a circle
    for (let i = 0; i < TAU; i += PI / 16) {
      // Save the current transformation state
      push();

      // Calculate the radius of the circle for this layer
      // It changes based on the curve factor and the layer's position
      let radius = z * (1 + curveFactor * (width - z));

      // Move to the position on the circle
      translate(sin(i) * radius / 2, cos(i) * radius / 2, -z);

      // Rotate each cylinder to align with its position on the circle
      rotateZ(i + f / rotationSpeed);

      // Calculate the color of the cylinder based on its position and the pulse speed
      let colorValue = map(sin((z - f * pulseSpeed) / 50), -1, 1, colorRange[0], colorRange[1]);

      // Set the fill color for the cylinder
      fill(colorValue);

      // Draw the cylinder with the specified dimensions
      cylinder(z / cylinderRadius, z / cylinderHeight);

      // Restore the transformation state
      pop();
    }
  }

  // Increment the frame counter
  f += 0.5;
}