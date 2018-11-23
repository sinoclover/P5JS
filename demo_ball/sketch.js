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

  // 初始化对象，将小球存于数组中
  for (var i = 0; i < 1; i++) {
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
// 事件函数
// function mouseClicked() {  // 鼠标点击
//   for (var i =0; i < balls.length; i++) {
//     balls[i].moveTo(mouseX, mouseY);
//   }
// }
function mousePressed() {  // 鼠标点下
  for (var i =0; i < balls.length; i++) {
    // 判断鼠标是否点到小球，即计算坐标值之间的距离是否小于半径
    var d = dist(balls[i].pos.x, balls[i].pos.y, mouseX, mouseY);
    if (d <= balls[i].r) {
      balls[i].dragState = true;
    }
  }
}
function mouseReleased() {  // 鼠标松开
  for (var i = 0; i < balls.length; i++) {
    balls[i].dragState = false;
  }
}