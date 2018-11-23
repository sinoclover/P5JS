// 加载图片

// 变量
var img;  // Declare variable 'img'.
var pos = 0;

// 预加载函数
function preload(){
  img = loadImage('images/1.jpg')
}

function setup() {
  var pic;
  pic = createCanvas(683, 1024);
  background(0);
  pic.parent('js-pic');
  // image(img, 0, 0, 683, 1024);  // 静态图片
}

function draw() {
  // 建立动态图片
  background(0);
  image(img, pos, 0, 68, 102);
  pos++;
}