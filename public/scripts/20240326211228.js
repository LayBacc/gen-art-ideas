// This code is a remix of the first and third code snippets shared, focusing on creating a monochrome animation loop.
// Instead of using colors, this animation utilizes opacity and shades of grey to create a visually engaging scene.
// The twist involves combining elements from both snippets: the rotating cylinder effect from the first,
// and the dynamic, evolving patterns from the third. The result is a monochromatic visual symphony.

let f = 0;

function setup() {
  createCanvas(800, 800, WEBGL);
  // Setting the frame rate to slow down the animation for a more hypnotic effect
  frameRate(30);
}

function draw() {
  background(0);
  // Utilizing rotateY for dynamic rotation around the y-axis, incorporating 'f' for a evolving rotation
  rotateY(f * 0.02);
  noFill();
  
  for (let z = -height / 2; z < height / 2; z += 20) {
    for (let theta = 0; theta < TAU; theta += PI / 8) {
      push();
      let x = sin(theta) * 200; // Horizontal displacement
      let y = cos(theta) * 200; // Vertical displacement
      
      // Adjust translation based on frame count to create evolution over time
      translate(x, y, z - f % height);
      
      // Dynamic rotation to add to the visual interest
      rotateZ(theta + f * 0.01);
      rotateX(f * 0.01);
      
      // Opacity and shades of grey vary with z-coordinate to create depth
      let greyScale = map(z, -height / 2, height / 2, 50, 255);
      let opacity = map(z, -height / 2, height / 2, 30, 180);
      stroke(greyScale, opacity);
      
      // sphere size modulates by both 'z' and sin(theta) to add variety
      let sphereSize = map(sin(f * 0.05 + z / 200), -1, 1, 4, 20);
      sphere(sphereSize);
      pop();
    }
  }
  
  // Incrementing 'f' very slightly for a smooth and slow evolution of the animation
  f += 0.5;
}