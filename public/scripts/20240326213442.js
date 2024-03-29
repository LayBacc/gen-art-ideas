// This code remixes elements from the circular pattern generator and the rotating spheres code snippets.
// The core idea here is to generate a monochrome animation loop that takes advantage of shades of grey and opacity
// to create a hypnotic, dynamic pattern within a 3D space using the WEBGL renderer in p5.js.

let f = 0;

function setup() {
  createCanvas(600, 600, WEBGL); // Setting canvas size and renderer to WEBGL for 3D rendering
  angleMode(DEGREES); // Easier angle management
}

function draw() {
  background(0); // black background for better contrast
  rotateY(f * 0.2); // slow rotation on Y axis for a dynamic feel
  
  // Loop to create a series of ellipses that stretch over a 3D space with varying opacities and sizes
  for (let theta = 0; theta < 360; theta += 30) { // Controls the angular separation of each element
    for(let r = 100; r < 300; r += 20) { // Controls the radial distance from the centre
      push();
      let alpha = map(r, 100, 300, 255, 0); // Opacity decreases as the radius increases
      let size = map(sin(f), -1, 1, 0.5, 2); // Size oscillation over time
      let gray = map(cos(theta + f), -1, 1, 100, 255); // Shade of grey oscillates with position and time
      
      // Translating and rotating for a dynamic layout
      let x = r * cos(theta + f * 0.5);
      let y = r * sin(theta + f * 0.5);
      translate(x, y, sin(theta + f) * 100);
      
      noStroke();
      fill(gray, alpha); // Applying the calculated shade of grey and opacity
      sphere(10 * size); // Drawing the sphere with dynamic size
      pop();
    }
  }
  
  // Increment frame count. Modulating the increment rate changes animation speed.
  f += 1.5;
}