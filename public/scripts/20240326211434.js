// Referencing and remixing the sphere pattern animation in the last snippet provided,
// with a focus on creating a monochrome animation loop. Introducing varying opacities
// and shades of grey instead of color to adhere to the monochrome theme request.

let f = 0; // Frame counter

function setup() {
  createCanvas(600, 600, WEBGL); // Set canvas size and mode
  noFill(); // No fill for shapes, focusing on stroke
}

function draw() {
  background(0); // Black background
  rotateY(f * 0.01); // Rotate the scene for dynamic effect
  
  let sphereOpacity;
  
  // Loop to create multiple layers of spheres
  for (let u = 0; u < TAU; u += PI / 32) { // Adjusted for a smoother loop
    for (let v = PI / 2; v <= 3 * PI / 2; v += PI / 32) { // Loop adjusted for full sphere coverage
      
      let r = 160 * cos(v); // Radius variation
      let greyScale = map(sin(v), -1, 1, 50, 255); // Mapping v's sine to shades of grey
      sphereOpacity = map(cos(u + f * 0.01), -1, 1, 50, 255); // Dynamic opacity based on position and frame count
      
      stroke(greyScale, sphereOpacity); // Dynamic stroke coloring based on greyScale and opacity
      push(); // Start a new drawing state
      
      translate(
        sin(u) * sin(v) * r, // X position
        cos(v) * r * 0.5, // Y Position, slightly adjusted for an elongated effect
        cos(u) * sin(v) * r // Z position
      );
      
      sphere(sin(u * v) * 20 + 5, 6, 4); // Sphere detail and size variation based on position
      
      pop(); // Restore original state
    }
  }
  
  f += 2; // Increment frame counter
}