// 操纵像素
// 变量
var img;
var w = window.innerWidth;
var h = window.innerHeight;

// 预加载
function preload() {
  img = loadImage('images/1.jpg');
}
function setup() {
  // put setup code here
  createCanvas(w, h);
  background(0);
  imageMode(CENTER);  // 以居中模式放置图片
  image(img, width/2, height/2);

  // loadPixels();
  // for(var i = 0; i < pixels.length; i+=4) {
  //   pixels[i] = 255 - pixels[i];
  //   pixels[i+1] = 255 - pixels[i+1];
  //   pixels[i+2] = 255 - pixels[i+2];
  //   pixels[i+3] = 255;
  // }
  // updatePixels();
}

function draw() {
  // put drawing code here
  loadPixels();
  for(var i = 0; i < pixels.length; i+=4) {
    pixels[i] = 255 - pixels[i];
    pixels[i+1] = 255 - pixels[i+1];
    pixels[i+2] = 255 - pixels[i+2];
    pixels[i+3] = 255;
  }
  updatePixels();
}