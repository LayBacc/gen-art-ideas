// Reference: This code is a remix and reinterpretation of the given snippets, 
// particularly focusing on the spherical animation with a tweak in parameters 
// and the incorporation of monochrome visual aesthetics with opacity and shades of grey.

let f = 0; // Frame count for animation progression

function setup() {
  createCanvas(600, 600, WEBGL); // Set up a WEBGL canvas
  noFill(); // No fill to use only stroke
}

function draw() {
  background(0); // Black background for monochrome theme
  rotateY(f / 100); // Rotate the whole scene over time
  
  // Loop to create multiple layered spheres
  for (let u = 0; u < TAU; u += PI / 18) { // PI/18 for a smoother loop
    for (let v = 0; v <= PI; v += PI / 36) { // Less dense sphere net
      let r = 200 * cos(v) + 50; // Radius changes to create more dynamic shapes
      let opacity = map(sin(f / 20), -1, 1, 50, 255); // Opacity pulsates over time
      stroke(opacity); // Use opacity for stroke
      
      // Calculate position
      let x = r * cos(u) * sin(v);
      let y = r * sin(u) * sin(v);
      let z = r * cos(v);
      
      // Adjust stroke weight based on position for depth effect
      strokeWeight(map(z, -200, 200, 0.1, 2));
      
      push(); // Isolate transformation
      translate(x, y, z); // Move to the calculated position
      sphere(5); // Draw a small sphere to create a net structure
      pop(); // Reset transformation
    }
  }
  
  f += 1; // Increment frame count
}