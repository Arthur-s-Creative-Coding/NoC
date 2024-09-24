// Reworked from /0. Randomness/05_RandomWalkerGaussian/sketch.js

let walker;

function setup() {
  createCanvas(400, 400);

  walker = new Walker();

  background(220, 120, 120);
}

function draw() {
  background(220, 120, 120, 30);

  walker.step();
  walker.show();
}

class Walker {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
  }

  show() {
    stroke(255);
    ellipse(this.pos.x, this.pos.y, 10);
  }

  step() {
    let step = p5.Vector.random2D();
    let stepMagnitude = randomGaussian(0, 0.8);
    step.mult(stepMagnitude);
    this.pos.add(step);
  }
}