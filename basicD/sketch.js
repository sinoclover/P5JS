// 小球回弹

// 变量
var w = window.innerWidth
var h = window.innerHeight

// 对象
var balls = [];

function setup() {
  // put setup code here
  createCanvas(w, h);
  background(0);
  noStroke();  // 去掉描边
  // c = color(random(255), random(255), random(255));

  // 初始化对象
  for (var i = 0; i < 10; i++) {
    var ball = {
      r: 30,
      posX: width/2,
      posY: height/2,
      speedX: random(-10, 10),
      speedY: random(-5, 5),
      c: color(random(255), random(255), random(255))
    }
    balls.push(ball);
  }
}

function draw() {
  // put drawing code here
  background(0, 30);
  for (var i = 0; i < balls.length; i++)
  {
    // 绘制小球并设置填充色
    fill(balls[i].c);
    ellipse(balls[i].posX, balls[i].posY, 2*balls[i].r);
    // 小球的运动位移
    balls[i].posX += balls[i].speedX;
    balls[i].posY += balls[i].speedY;
    // 小球的碰撞检测
    if (balls[i].posX <= balls[i].r || (balls[i].posX+balls[i].r) >= width) {
      balls[i].speedX = -balls[i].speedX;
      balls[i].c = color(random(255), random(255), random(255));

    }
    if (balls[i].posY <= balls[i].r || (balls[i].posY+balls[i].r) >= height) {
      balls[i].speedY = -balls[i].speedY;
      balls[i].c = color(random(255), random(255), random(255));
    }
  }
}