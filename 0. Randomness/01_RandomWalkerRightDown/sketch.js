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

    switch (choice) {
      case 0:
        this.x += 1;
        break;
      case 1:
        this.x -= 0.5;
        break;
      case 2:
        this.y += 1;
        break;
      case 3:
        this.y -= 0.5;
        break;
      default:
        break;
    }
  }
}