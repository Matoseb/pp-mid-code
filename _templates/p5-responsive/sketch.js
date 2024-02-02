document.title = 'P5 Responsive'

function setup() {
  createCanvas();
  windowResized(); 
}

function draw() {
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}