// Reference: The code merges elements and ideas from the initial 3D shapes code and the dynamic motion concept seen in other examples
// Twist: This code will create a monochrome, 3D animation that twists and rotates, using opacity and shades of grey rather than colors. 
// Principle: It maintains a monochromatic theme while creating a visual rhythm through changing opacity and 3D transformations.

let f = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  rotateX(f * 0.3);
  rotateY(f * 0.3);
  noFill();
  
  // Creates a monochrome effect with varying shades and opacity
  for (let z = -200; z < 200; z += 20) {
    for (let theta = 0; theta < 360; theta += 18) {
      push();
      let x = 160 * cos(theta) * sin(f);
      let y = 160 * sin(theta) * sin(f);
      translate(x, y, z);
      rotateZ(theta + f * 2);
      rotateX(f * 2);
      rotateY(theta * 2);
      
      // Opacity changes with position; creates a rhythmic visual in monochrome
      let opacity = map(sin(f + z), -1, 1, 50, 255);
      stroke(255, opacity);
      strokeWeight(2);
      box(40, 40, 40);
      pop();
    }
  }
  f += 2;
}