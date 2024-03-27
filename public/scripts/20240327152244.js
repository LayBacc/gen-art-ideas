// This code is a remix of the snippets provided, referencing the hexagramOrder and rotation elements from the second snippet,
// along with the animation and geometry concepts from the first and last snippets, while applying monochrome aesthetics as instructed.

let angleOffset = 0;
let hexagramOrder = Array.from({ length: 64 }, (_, i) => i);
let pulseSpeed = 0.1;

function setup() {
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);
  frameRate(30);
}

function draw() {
  background(0);
  noFill(); // Emphasizing monochrome via no fill and stroke only

  let radius = 200;
  let numHexagrams = 64;
  let pulse = sin(frameCount * pulseSpeed) * 50; // Sinusoidal pulse effect
  rotateY(frameCount); // Continuous Y-axis rotation

  for (let i = 0; i < numHexagrams; i++) {
    let angle = map(i, 0, numHexagrams, 0, 360) + angleOffset;
    stroke(255, 255 - i * 4); // Gradient effect in monochrome (shades of grey towards black)
    strokeWeight(2);
    
    push();
    rotateY(angle * 2); // Double rotation effect for visual complexity
    rotateX(angle); 
    torus(radius + pulse, 15); // Using torus for a 3D geometric pattern
    pop();
  }

  angleOffset += 0.5; // Slowly changing the offset for a dynamic pattern evolution
}