// 基本操作

// 变量
var a = 0;

function setup() {
  // put setup code here
  // 在H5页面框架中的标记加载完成后启动

  var b;
  b = createCanvas(200, 150);
  b.parent('js-box')  // 通过容器的标记定位画布位置
  fill(255); // 改变填充色的颜色
  myFunc();
}

function draw() {
  // put drawing code here
  // 60fps
  background(0);
  text(a, 20, 40);
  // ellipse(a, a, 30)  // 绘制圆形
  a++;
}

// 函数
function myFunc() {
  console.log('hello, world!');  // 控制台操作
}