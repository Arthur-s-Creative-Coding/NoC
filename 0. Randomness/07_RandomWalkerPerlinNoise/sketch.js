let walker;

function setup() {
  createCanvas(400, 400);

  walker = new Walker();

  background(220, 120, 120);
}

function draw() {
  background(220, 120, 120);

  walker.step();
  walker.show();
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.tx = 0;
    this.ty = 10000;
  }

  step() {
    let stepx = map(noise(this.tx), 0, 1, -2, 2);
    this.x += stepx
    let stepy = map(noise(this.ty), 0, 1, -2, 2);
    this.y += stepy;

    this.tx += 0.01;
    this.ty += 0.01;
  }

  show() {
    strokeWeight(2);
    fill(127);
    stroke(0);
    circle(this.x, this.y, 48);
  }
}
