// 小球波浪

// 变量
var w = window.innerWidth;
var h = window.innerHeight;
var cooltime = 0;
var force;
// 对象
var balls = [];
// var little_balls = [];

function setup() {
  // put setup code here
  createCanvas(w, h);
  background(0);
  noStroke();  // 去掉描边

  // 初始化对象
  for (var i = 0; i < 10; i++) {
    balls.push(new Ball(random(0, width), random(0, height), 40));
  }
}

function draw() {
  // put drawing code here
  background(0, 30);
  cooltime--;

  if (cooltime < 0) {
    force = createVector(-1, random(-1, 1));
    cooltime = 120;
  }

  for (var i = 0; i < balls.length; i++)
  {
    balls[i].render();
    balls[i].update();
    balls[i].waveTo(force);
  }
  // for (var j = 0; j <little_balls.length; j++)
  // {
  //   little_balls[j].render();
  //   little_balls[j].update();
  // }
}

// // 函数
// function explode(clickBallIndex) {
//   var posX = balls[clickBallIndex].pos.x;
//   var posY = balls[clickBallIndex].pos.y;
//   var r = balls[clickBallIndex].r * 0.5;
//   balls.splice(clickBallIndex, 1);
//   for (var i =  0; i < 5; i++) {
//     little_balls.push(new Ball(posX, posY, r))
//   }
// }

