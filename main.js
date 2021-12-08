function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(200, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 90, 90, 470, 300);
    
    fill(250, 0, 0);
    stroke(250, 0, 0);
    circle(105, 90, 90);
    circle(550, 90, 90);
    circle(550, 380, 90);
    circle(100, 380, 90);
    fill(0, 180, 0);
    stroke(0, 180, 0);
    rect(125, 60, 403, 55);
    rect(125, 355, 403, 55);
    rect(75, 60, 55, 350);
    rect(500, 60, 55, 350);
}

function take_snapshot() {
    save('myselfie.png');
}
