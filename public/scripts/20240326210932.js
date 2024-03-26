// Referencing the dynamic sphere pattern from the snippet shared similar to @KomaTebe's work,
// this code generates a monochrome animation loop with a focus on opacity and shades of grey 
// instead of colors to create a mesmerizing, constantly evolving 3D sphere pattern.

let f = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
  frameRate(30); // Smooth but not too fast
}

function draw() {
  background(0);
  
  // Dynamic rotation to enhance visual interest
  rotateX(f * 0.02);
  rotateY(f * 0.03);
  
  let gridSize = 24; // Smaller gridSize creates more detailed patterns

  for (let u = -PI; u < PI; u += PI / gridSize) {
    for (let v = -HALF_PI; v < HALF_PI; v += PI / gridSize) {
      
      // Modified equation to ensure monochrome aesthetics with a focus on opacity and shades of grey
      let opacity = map(sin(v) * cos(u + f * 0.05), -1, 1, 50, 255);
      let greyShade = map(cos(u * v * sin(f * 0.01)), -1, 1, 0, 255);
      
      push();
      
      // Sphere positioning and size modulation for a denser cluster of spheres
      let r = 200 * (sin(f * 0.001) + 1.5); // Radius modulation for dynamic movement
      let x = r * sin(u) * cos(v);
      let y = r * sin(u) * sin(v);
      let z = r * cos(u);
      translate(x, y, z);
      
      // Use of opacity and shades of grey to create the visual effect
      fill(greyShade, opacity);
      noStroke();
      sphere(8 + sin(f + u * v) * 4); // Dynamic sphere sizing
      
      pop();
    }
  }
  
  f += 0.5; // Control the speed of animation
}