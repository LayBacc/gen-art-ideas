// This code is a remix of the 3D geometric animation and the dynamic hexagram visualisation previously shared.
// It creates a monochrome loop with pulsating hexagrams in a 3D space.
// The twist is instead of using colors, shades of grey and opacity are used for visual depth.

let shiftAmounts = Array.from({ length: 6 }, (_, i) => i * 10);
let hexagramOrder = Array.from({ length: 64 }, (_, i) => i).sort(() => Math.random() - 0.5); // Shuffle for variety
let f = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);
  frameRate(30);
}

function draw() {
  background(0);
  rotateY(frameCount / 100); // Slow rotation for dynamic viewing
  let numHexagrams = 64;
  let numLevels = 6;
  let largestRadius = 240;
  let cellHeight = largestRadius / numLevels * 2; // Adjust for 3D perspective

  for (let level = 0; level < numLevels; level++) {
    let radius = cellHeight * (level + 1);
    for (let i = 0; i < numHexagrams; i++) {
      let segmentAngle = 360 / numHexagrams;
      let startAngle = segmentAngle * i - 90;
      let endAngle = startAngle + segmentAngle;

      let shiftedIndex = (i + shiftAmounts[level] + Math.floor(f / 10)) % numHexagrams;
      let hexagramIndex = hexagramOrder[shiftedIndex];
      let hexagramPattern = hexagramIndex.toString(2).padStart(6, '0').split('');

      for (let line = 0; line < hexagramPattern.length; line++) {
        let isYang = hexagramPattern[line] === '1';
        let grey = isYang ? 255 : 50; // Use grey scale based on the line
        let alpha = 100 + 155 * (line / hexagramPattern.length); // Vary opacity for depth effect
        fill(grey, alpha);
        noStroke();
        // Adjust the arc to create 3D visualisation effect
        for (let angle = startAngle; angle < endAngle; angle += segmentAngle / 20) {
          push();
          let x = cos(angle) * radius;
          let y = sin(angle) * radius;
          translate(x, y, -level * 20); // Push back each level for depth
          sphere(2); // Small sphere to build up the arc
          pop();
        }
      }
    }
  }
  f += 0.5; // Increment frame count for dynamic movement over time
}