let slider
let t = 0

function setup() {
    slider = createSlider(0, 1, 0, 0.000001);
    slider.position(20, 20);
    slider.size(300);

    createCanvas();
    windowResized();
}

function draw() {
    let oldT = t;
    t = (Math.cos(performance.now() * 0.001) + 1) / 2
    const deltaT = t - oldT

    if (!mouseIsPressed)
        slider.value(slider.value() + deltaT);

    tonDessin(slider.value())
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}