function setup() {
  createCanvas(400, 600);
  background(200, 300);
}

function draw() {
  let x = randomGaussian(width / 2, 30);
  let y = randomGaussian(height / 2, 60);
  //20, 255, 247
  let r = randomGaussian(20, 20);
  let g = randomGaussian(255, 20);
  let b = randomGaussian(247, 20);

  noStroke();
  fill(r, g, b, 80);
  ellipse(x, y, 20);

}
