// 小球回弹

// 变量
var w = window.innerWidth;
var h = window.innerHeight;
var cooltime = 0;
var mic; 

// 对象
var balls = [];
var little_balls = [];

function setup() {
  // put setup code here
  createCanvas(w, h);
  background(0);
  noStroke();  // 去掉描边
  
  // 初始化声音对象
  mic = new p5.AudioIn();
  mic.start();

  // 初始化对象
  for (var i = 0; i < 10; i++) {
    balls.push(new Ball(width/2, height/2, 50));
  }
}

function draw() {
  // put drawing code here
  background(0, 30);
  if (cooltime > 0) {
    cooltime--;
  }
  for (var i = 0; i < balls.length; i++)
  {
    balls[i].render();
    balls[i].update();
  }
  for (var j = 0; j <little_balls.length; j++)
  {
    little_balls[j].render();
    little_balls[j].update();
  }

  soundExplode();
}

// 事件
function mouseClicked() {
  for (var i = 0; i < balls.length; i++) {
    var d = dist(balls[i].pos.x, balls[i].pos.y, mouseX, mouseY);
    if (d <= balls[i].r && cooltime <= 0) {
      explode(i);
      cooltime = 60;
    }
  }
}

// 函数
function explode(clickBallIndex) {
  var posX = balls[clickBallIndex].pos.x;
  var posY = balls[clickBallIndex].pos.y;
  var r = balls[clickBallIndex].r * 0.5;
  balls.splice(clickBallIndex, 1);
  for (var i =  0; i < 5; i++) {
    little_balls.push(new Ball(posX, posY, r))
  }
}

function soundExplode() {
  var level = Math.floor(mic.getLevel() * 100);
  if (level > 30 && cooltime <= 0) {
    explode(Math.floor(random(balls.length)));
    cooltime = 60;
  }
}
