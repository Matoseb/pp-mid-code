"use strict"

function drawMyCircle(x, y) { // normilazed value between 0 to 1
  push()
  translate(width * x, height * y)
  ellipse(0, 0, 10)
  pop()
}

function setup() {
  createCanvas(200, 200)
  // console.log('setup initiated');
  background('black')

  for (
    
    let i = 0; // setup
    
    i < 50; // condition
    
    i+=2 // i+= 1, i = i + 1
    
    ) {
      // draw
    
    console.log(i);
  }
}

function draw() {
  background('black')


  // MAKE  gradient

  // red
  // #FF0000

  // yellow
  // #FFFF00	rgb(255,255,0)

  // rgb(255,0,0) > rgb(129,55,20)


  // const color1 = color('red')
  // const color2 = color('rgb(129,55,220)')
  // const color3 = lerpColor(color1, color2, mouseX/width)

  // fill(color3);
  // ellipse(mouseX, height/2, 100)

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}




