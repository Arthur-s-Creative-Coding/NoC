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
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    stroke(255);
    ellipse(this.x, this.y, 10);
  }

  step() {
    let choice = floor(random(4));

    let step_size = randomGaussian(0, 0.8);

    switch (choice) {
      case 0:
        this.x += step_size;
        break;
      case 1:
        this.x -= step_size;
        break;
      case 2:
        this.y += step_size;
        break;
      case 3:
        this.y -= step_size;
        break;
      default:
        break;
    }
  }
}