// Referenced from the spiraling spheres snippet and the monochrome particle swirl, infusing a twist of monochrome aesthetics through opacity and shapes.
let f = 0; // frame counter

function setup() {
  createCanvas(400, 400, WEBGL); // setting up the 3D canvas
  angleMode(DEGREES); // using degrees for angular measurements
}

function draw() {
  background(0); // black background
  noFill(); // no fill for shapes
  stroke(255); // white outline for shapes
  rotateY(f * 0.2); // slow Y axis rotation

  // Loop to create a series of ellipsoids
  for (let u = 0; u < TAU + 1; u += PI / 32) {
    for (let v = PI; v > PI / 2; v -= PI / 32) {
      let r = 120 * cos(v + f / 20); // Radius modulation with cos for smoother animation
      let opacity = map(sin(v + f / 20), -1, 1, 50, 255); // Opacity modulation
      stroke(255, opacity); // Applying opacity to the stroke for fading effect
      let x = sin(u + f / 20) * sin(v) * r;
      let y = cos(v) * r / 2; // Division for an ellipsoid shape
      let z = cos(u + f / 20) * sin(v) * r;
      
      push(); // Start a new drawing state
      translate(x, y - 200, z); // Positioning the shape in space
      sphere(5); // Drawing a small sphere as part of the pattern
      pop(); // Restore original state
    }
  }

  f += 0.5; // Increment frame count
}