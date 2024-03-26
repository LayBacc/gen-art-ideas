// Referencing the animation loop from the original dynamic sphere snippet by @KomaTebe on Twitter
// The twist includes making use of opacity and shades of grey instead of colors for a monochrome animation loop.
// Added variation in sphere sizes and opacity based on the loop variable for dynamic appearance.

let baseOpacity = 50; // Base opacity for drawing spheres
let amplitude = 0.5; // Amplitude for opacity and size variations
let waveSpeed = PI / 256; // Speed at which the wave progresses, influencing rotation and size
let f = 0; // Frame counter

function setup() {
  createCanvas(400, 400, WEBGL); // Set up a 3D canvas
  noFill(); // No fill to better emphasize the opacity and strokes
}

function draw() {
  background(0); // Black background for contrast
  rotateY(f * 0.1); // Slow rotation around the Y-axis for dynamics

  // Loop over two primary angles to create a spherical structure
  for (let u = 0; u < TAU; u += PI / 64) {
    for (let v = 0; v < TAU; v += PI / 64) {
      // Calculate dynamic opacity and size for each sphere
      let opacity = baseOpacity + sin(f + u) * 100 * amplitude;
      let sphereSize = 2 + sin(f + v) * 2 * amplitude;
      
      // Setting stroke color to white with calculated opacity
      stroke(255, opacity);

      // Position calculation for each sphere making up the overall shape
      let x = 160 * sin(u) * cos(v);
      let y = 160 * sin(u) * sin(v);
      let z = 160 * cos(u);

      // Transforming and placing spheres
      push();
      translate(x, y, z);
      sphere(sphereSize); // Drawing small spheres with dynamic size
      pop();
    }
  }
  
  f += waveSpeed; // Increment frame counter to animate
}