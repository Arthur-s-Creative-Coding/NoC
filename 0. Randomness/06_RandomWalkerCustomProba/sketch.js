// To display bar chart
let randomCounts = [];

let walker;

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 20; i++) {
    randomCounts[i] = 0;
  }

  walker = new Walker();

  background(220, 120, 120);
}

function draw() {
  background(220, 120, 120);

  // Pick random number
  let step = int(acceptReject() * randomCounts.length);
  randomCounts[step]++;

  stroke(0);
  strokeWeight(2);
  fill(255, 200);

  let w = width / randomCounts.length;

  for (let x = 0; x < randomCounts.length; x++) {
    rect(x * w, height - randomCounts[x], w, randomCounts[x]);
  }

  walker.step(step / 5);
  walker.show();
}

function acceptReject() {
  while (true) {
    let r1 = random(1);
    let probability = r1 * r1;

    let r2 = random(1);
    if (r2 < probability) {
      return r1;
    }
  }
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, 20);
  }

  step(step) {
    let choice = floor(random(4));

    // let step = acceptReject();

    switch (choice) {
      case 0:
        this.x += step;
        break;
      case 1:
        this.x -= step;
        break;
      case 2:
        this.y += step;
        break;
      case 3:
        this.y -= step;
        break;
      default:
        break;
    }
  }
}