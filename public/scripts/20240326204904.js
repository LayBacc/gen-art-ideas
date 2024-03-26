// This code is a remix of the visual p5.js sketches shared previously, mainly inspired by the dynamic animations and geometric shapes.
// Key inspiration was drawn from translating geometric shapes into a more organic and evolving form, as seen in the Twitter links provided.
// The focus is on creating a mesmerizing field of pulsating hexagons that rotate and change colors over time, reflecting a blend of structure and chaos.

let f = 0;

function setup() {
  createCanvas(800, 800, WEBGL);
  colorMode(HSB, 360, 100, 100);
  // Frame rate is set to a lower value for a more hypnotic visual effect
  frameRate(30);
}

function draw() {
  background(0);
  rotateY(f * 0.02);
  translate(-width / 2, -height / 2, 0);
  let hexSize = 60;
  
  for (let x = 0; x < width; x += hexSize * 1.5) {
    for (let y = 0; y < height; y += sqrt(3) * hexSize) {
      push();
      let dX = x + (y % (2 * hexSize) == 0 ? hexSize * 0.75 : 0);
      translate(dX, y, -200 + sin(f * 0.05 + (x * y) * 0.00005) * 200);
      rotateZ(f * 0.02 + (x + y) * 0.0005);
      
      // Colors change over time creating a gradient effect across the field
      fill((f * 0.1 + x - y) % 360, 100, 100);
      hexagon(0, 0, hexSize);
      pop();
    }
  }
  f += 0.5;
}

// Drawing a hexagon at specified location and size
function hexagon(x, y, s) {
  beginShape();
  for (let i = 0; i < TAU; i += TAU / 6) {
    vertex(x + cos(i) * s, y + sin(i) * s);
  }
  endShape(CLOSE);
}