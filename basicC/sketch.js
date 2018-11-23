// 事件与循环

function setup() {
  // put setup code here
  createCanvas(400, 200);
  background(0);
  // noStroke();  // 取消描边
  stroke(255);
  for(var i = 0; i < 10; i++) {
    line(40*i, 0, 40*i, height);
    line(0, 20*i, width, 20*i);
  }
}

function draw() {
  // put drawing code here
}

// 事件
// function mouseClicked() {
//   fill(255);
//   ellipse(mouseX, mouseY, 50);
// }

// function mouseMoved() {
//   fill(random(255));
//   ellipse(mouseX, mouseY, 50);
// }