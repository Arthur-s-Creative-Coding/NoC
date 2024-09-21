// Random walker that moves in direction of the mouse half of the time

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
    let r = random();

    if (r < 0.6) {
      // Move in the direction of the mouse
      if (mouseX > this.x + 10) {
        this.x++;
      } else if (mouseX < this.x - 10) {
        this.x--;
      }

      if (mouseY > this.y + 10) {
        this.y++;
      } else if (mouseY < this.y - 10) {
        this.y--;
      }

    } else {
      if (r < 0.7) {
        this.x++;
      } else if (r < 0.8) {
        this.x--;
      } else if (r < 0.9) {
        this.y++;
      } else {
        this.y--;
      }
    }
  }
}