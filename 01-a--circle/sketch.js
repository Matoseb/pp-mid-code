function setup() {
  createCanvas();
  windowResized(); 
  stroke(255);
  noFill();
}

function draw() {
  background(0);
  fitEllipse(0.25, 0.5, 0.5, 1);
  fitEllipse(0.75, 0.5, 0.5, 1);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function fitEllipse(x, y, w, h) {
  ellipse(x * width, y * height, w * width, h * height)
}