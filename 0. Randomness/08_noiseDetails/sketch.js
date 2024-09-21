// Display the effect of noise detail on Perlin Noise
// The seed is fixed to visualize it better

i = 1;

function setup() {
  createCanvas(400, 400);

  noiseSeed(0);
}

function draw() {
  frameRate(3);
  displayNoise(i % 10);

  textSize(20);
  fill(255);
  text("Noise Detail: " + i, x = 5, y = 25);

  if (i === 10) { i = 1; } else { i++; }
}

function displayNoise(detailLevel) {
  noiseDetail(detailLevel);

  loadPixels();
  let xoff = 0.0;

  for (let x = 0; x < width; x++) {
    let yoff = 0.0;

    for (let y = 0; y < height; y++) {
      const bright = map(noise(xoff, yoff), 0, 1, 0, 255);
      set(x, y, floor(bright));
      yoff += 0.02;
    }
    xoff += 0.02;
  }

  updatePixels();
}