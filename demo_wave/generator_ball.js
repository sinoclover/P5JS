// 构造器函数（类的概念），并添加参数控制
function Ball(posX, posY, ballSize) {
    // 属性
    this.r = ballSize;
    this.pos = createVector(posX, posY);  // 根据位置参数创建方向向量
    this.vel = p5.Vector.random2D();  // 通过函数创建长度一定的向量,角度随机
    this.vel.setMag(10);
    this.c = color(random(255), random(255), random(255));
    // 方法
    this.update = function() {
       // 根据速度更新位置
      this.pos.add(this.vel);  // 方向向量加速度向量，随机角度
      // 判断碰撞后的方向以及速度计算
      if (this.pos.x <= 0) {
        this.pos.x = width;
      }
      else if (this.pos.x > width) {
        this.pos.x = 0;
      }
      if (this.pos.y <= 0) {
        this.pos.y = height;
      }
      else if (this.pos.y > height) {
        this.pos.y = 0;
      }
    }

    this.render = function() {
      fill(this.c);
      ellipse(this.pos.x, this.pos.y, 2*this.r);
    }

    // 波浪运动
    this.waveTo = function (force) {
      force.setMag(5)
      // var waveForce =  force.copy().mult(0.5);
      // waveForce.rotate(frameCount / 60);

      // // 忽略原速度影响
      // this.vel = p5.Vector.add(force, snakeForce); 
  
      // 添加原速度影响
      this.vel.add(force)
      this.vel.mult(0.6);
    }
  }