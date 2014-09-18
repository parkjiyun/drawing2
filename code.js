backgroundColor = color(0, 0, 0, 255);
background(backgroundColor);

fillColor = color(255, 0, 0, 128);
fill(fillColor);
randomColor!!

randomColor = color(
  Math.random() * 255,
  Math.random() * 255,
  Math.random() * 255,
  Math.random() * 255);
mouseColor

canvasWidth = 640;
canvasHeight = 480;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  mouseColor = color(
    mouseX / canvasWidth * 255,
    mouseY / canvasWidth * 255,
    0,
    0);

  fill(mouseColor);
  // 이 밑에 그리기
}