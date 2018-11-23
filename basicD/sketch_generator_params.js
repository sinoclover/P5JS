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
  for (var i = 0; i < 5; i++) {
    balls.push(new Ball(width/2, height/2, 50));
  }
}

function draw() {
  // put drawing code here
  background(0, 30);
  for (var i = 0; i < balls.length; i++)
  {
    balls[i].render();
    balls[i].update();

  }
}

// 构造器函数（类的概念），并添加参数控制
function Ball(posX, posY, ballSize) {
  // 属性
  this.r = ballSize;
  this.pos = createVector(posX, posY);  // 根据位置参数创建方向向量
  this.vel = p5.Vector.random2D();  // 通过函数创建长度一定的向量,角度随机
  this.vel.setMag(random(5, 10));
  this.c = color(random(255), random(255), random(255));
  // 方法
  this.update = function() {
    // 根据速度更新位置
    this.pos.add(this.vel);  // 方向向量加速度向量，随机角度
    // 判断碰撞后的方向以及速度计算
    // 小球碰到左侧，反弹力向右
    if (this.pos.x <= this.r) {
      this.bounceOnEdge(createVector(1, 0));   // 传入反弹力方向获取反弹力后更新速度
      this.c = color(random(255), random(255), random(255));
    }
    // 小球碰到右侧，反弹力向左
    if (this.pos.x + this.r >= width) {
      this.bounceOnEdge(createVector(-1, 0));
      this.c = color(random(255), random(255), random(255));
    }
    // 小球碰到上部，反弹力向下
    if (this.pos.y <= this.r) {
      this.bounceOnEdge(createVector(0, -1));
      this.c = color(random(255), random(255), random(255));
    }
    // 小球碰到下部，反弹力向上
    if (this.pos.y + this.r >= height) {
      this.bounceOnEdge(createVector(0, 1));
      this.c = color(random(255), random(255), random(255));
    }
  }
  this.render = function() {
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, 2*this.r);
  }
  // 根据传入反弹力的方向产生反弹力的大小后更新速度，force是只有方向没有大小的矢量
  this.bounceOnEdge = function(force) {
    // 复制当前速度向量并反向（矢量）
    var untivel = this.vel.copy();
    untivel.rotate(PI);
    // 计算反弹力向量的方向与速度反向方向（矢量）的夹角（标量）
    var angle = force.angleBetween(untivel);  // 注意用法
    // 计算反弹力大小（标量）并赋予反弹力（矢量）
    var len = Math.cos(angle) * this.vel.mag() * 2;
    force.setMag(len);
    // 更新当前速度叠加反弹力
    this.vel.add(force);
  }
}