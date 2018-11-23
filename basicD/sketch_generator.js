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
    balls.push(new Ball());
  }
}

function draw() {
  // put drawing code here
  background(0, 30);
  for (var i = 0; i < balls.length; i++)
  {
    balls[i].update();
    balls[i].render();
    balls[i].bounceOnEdge();
  }
}

// 构造器函数（类的概念）
function Ball() {
  // 属性
  this.r = 30,
  this.posX = width/2,
  this.posY = height/2,
  this.speedX = random(-10, 10),
  this.speedY = random(-5, 5),
  this.c = color(random(255), random(255), random(255))
  // 方法
  this.update = function() {
    this.posX += this.speedX;
    this.posY += this.speedY;
  }
  this.render = function() {
    fill(this.c);
    ellipse(this.posX, this.posY, 2*this.r);
  }
  this.bounceOnEdge = function() {
    if (this.posX <= this.r || this.posX + this.r >= width) {
      this.speedX = -this.speedX
      this.c = color(random(255), random(255), random(255));
    }
    if (this.posY <= this.r || this.posY + this.r >= height) {
      this.speedY = -this.speedY
      this.c = color(random(255), random(255), random(255));
    }
  }
}