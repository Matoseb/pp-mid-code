document.title = 'Exercice #1'

function taFonction(t) { // t = valeur entre 0 et 1
  // YOUR CODE HERE
  // pas de background() permis!

  // ellipse(t * width, height/2, 100)
  rect(0, 0, width, height, t * min(width, height) / 2);
}

function setup() {
  createCanvas();
  windowResized();
}

function draw() {
  background(0);
  const t = constrain(mouseX / width, 0, 1);
  console.log(t);
  taFonction(t)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}