// Visualize moving 2D noise

offset = 0.0;

function setup() {
  createCanvas(400, 400);

  noiseSeed(0);
}

function draw() {
  displayNoise(offset);

  offset += 0.006;
}

function displayNoise(offset) {
  loadPixels();
  let xoff = 0.0;

  for (let x = 0; x < width; x++) {
    let yoff = 0.0;

    for (let y = 0; y < height; y++) {
      const bright = map(noise(xoff, yoff, offset), 0, 1, 0, 255);
      set(x, y, floor(bright));
      yoff += 0.02;
    }
    xoff += 0.02;
  }

  updatePixels();
}