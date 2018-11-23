//构造器函数
function Ball(posX, posY, ballSize) {
    // 属性
    this.r = ballSize;
    this.pos = createVector(posX, posY);  // 根据位置参数创建方向向量
    this.vel = createVector(0, 0); // 设置初始静止
    // this.vel = p5.Vector.random2D();  // 通过函数创建长度一定的向量,角度随机
    // this.vel.setMag(random(5, 10));
    this.c = color(random(255), random(255), random(255));
    this.dragState = false;  // 定义小球是否被拖拽
  
    // 方法
    this.update = function() {
      // 根据状态更新速度
      if (this.dragState == true) {
        this.moveTo(mouseX, mouseY);
      }else {
        this.snakeTo(width/2, height/2);
      }
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
  
    // 小球的渲染绘制
    this.render = function() {
      stroke(255);
      line(this.pos.x, this.pos.y, width/2, height/2)
      fill(this.c);
      noStroke();
      ellipse(this.pos.x, this.pos.y, 2*this.r);
    }
  
    // 小球的反弹
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
  
    // 小球向相应的坐标位置移动
    this.moveTo = function (targetX, targetY) {
      var target = createVector(targetX, targetY);
      var force = p5.Vector.sub(target, this.pos);
      var w = 0.1;  // 设置力大小的系数
      // 忽略原速度，直接调用force作为速度向量
      this.vel = force.copy().mult(w);
    }
  
    // 弹性运动方式
    this.elasticTo = function (targetX, targetY) {
      var target = createVector(targetX, targetY);
      var force = p5.Vector.sub(target, this.pos);
      var w = 0.1;  // 设置力大小的系数
      force.mult(w);
      // 使用force影响原速度变化
      this.vel.add(force);
      this.vel.mult(0.8)
    }
  
    // 蛇形运动
    this.snakeTo = function (targetX, targetY) {
      var target = createVector(targetX, targetY);
      var force = p5.Vector.sub(target, this.pos);
      var w = 0.1;  // 设置力大小的系数
      force.mult(w);
      var snakeForce =  force.copy().mult(0.3);
      snakeForce.rotate(frameCount);
      // 忽略原速度影响
      // this.vel = p5.Vector.add(force, snakeForce); 
  
      // 添加原速度影响
      this.vel.add(force).add(snakeForce);
      this.vel.mult(0.8);
    }
  }