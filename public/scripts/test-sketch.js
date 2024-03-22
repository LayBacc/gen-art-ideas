let pulseSpeed = 16;
let colorRange = [255, 150];
let rotationSpeed = 20;
let cylinderRadius = 120;
let cylinderHeight = 64;
let curveFactor = 0.00048;
let narrowFactor = 0.06;
let f = 0;

function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background(0);
  rotateY(sin(f / rotationSpeed) / 4);
  noStroke();
  for (let z = 0; z < width * 4; z += 80) {
    for (let i = 0; i < TAU; i += PI / 16) {
      push();
      let radius = width * narrowFactor + curveFactor * z * z;
      translate(sin(i) * radius, cos(i) * radius, -z);
      rotateZ(i + f / rotationSpeed);
      let colorValue = map(
        sin((z - f * pulseSpeed) / 50),
        -1,
        1,
        colorRange[0],
        colorRange[1],
      );
      fill(colorValue);
      cylinder(width / cylinderRadius, width / cylinderHeight);
      pop();
    }
  }
  f += 0.5;
}
