// Reference: The first and third code snippets were inspirational sources for this creation.
// The original codes created intriguing patterns and animations. Here, we blend elements from both:
// the dynamic rotation and moving spheres from the third snippet,
// with an emphasis on a monochrome theme inspired by the request for shades of grey and opacity variation.

let f = 0;

function setup() {
  // Create the canvas
  createCanvas(600, 600, WEBGL);
  // Set the frame rate to control the speed of the animation smoothly
  frameRate(24);
}

function draw() {
  // Background set to black with slight opacity for a trailing effect
  background(0, 25);
  
  // Dynamic rotation around the Y-axis, influenced by frame count
  rotateY(f * 0.02);

  // Monochrome look: shades of grey enabled by adjusting stroke
  // and fill with varying opacities for a more ethereal effect
  stroke(255, 150); // Semi-transparent white lines
  
  // Create moving spheres with changing sizes and positions
  for (let u = 0; u < TAU; u += PI / 8) {
    for (let v = 0; v < TAU; v += PI / 8) {
      // The push and pop functions save and restore the drawing style settings and transformations
      push();
      // Calculations for dynamic movement and placement of shapes
      let r = 160 * sin(frameCount * 0.01 + u * 4); // Varying radius for a pulsing effect
      translate(sin(u) * r, sin(v) * r, cos(u + v) * r);
      // Fill ensures the shapes are not entirely opaque, contributing to the intended visual effect
      fill(255, map(sin(f + u), -1, 1, 64, 192)); 
      // Sphere properties create visually interesting patterns while maintaining performance
      sphere(20, 6, 4); 
      pop();
    }
  }

  // Increment frame count to animate
  f += 2;
}