// This code is inspired by the animation loop with the circular waveforms
// from the fourth snippet and incorporates elements of monochrome aesthetic
// and noise to add depth, as was seen with the circular noise pattern in the third snippet.
// All colors have been adapted to use shades of grey and opacity for a monochromatic theme.

let t = 0;

function setup() {
  // Set up a 400x400 canvas with WEBGL for 3D rendering
  createCanvas(400, 400, WEBGL);
  // Set the framerate to create a smoother animation
  frameRate(30);
}

function draw() {
  // Set the background to a mid-grey with some transparency for motion trail effects
  background(128, 128, 128, 50);
  // Rotate the whole scene for dynamic visuals
  rotateY(t * 0.02);
  rotateX(t * 0.02);
  // No stroke for the spheres
  noStroke();
  
  // Loop to create multiple layers of spheres
  for(let angle = 0; angle < TAU; angle += PI/12) {
    for(let v = PI/2; v >= 0; v -= PI/16) {
      // Calculate dynamic positions and size based on 't'
      let V = v - (t % (PI/256));
      let r = 100 * cos(v + t * 0.05);
      // Compute X, Y, Z coordinates for a more intricate pattern
      let x = sin(angle + t * 0.05) * cos(V) * r;
      let y = tan(V) * r;
      let z = cos(angle + t * 0.05) * cos(V) * r;
      // Set the shade of grey and opacity based on the vertical position
      let opacity = map(y, -100, 100, 255, 0);
      fill(255, opacity);
      // Move and draw the sphere
      push();
      translate(x, y, z);
      sphere(10 + (sin(t * 0.1) * 8)); // Dynamic sizing
      pop();
    }
  }
  
  // Increment 't' to animate
  t += PI / 120;
}