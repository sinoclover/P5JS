// 变量
var capture;

function setup() {
  // put setup code here
  createCanvas(240, 180);
  capture = createCapture(VIDEO);  // 注意获取视频尺寸的比例
  capture.hide();
  pixelDensity(1);
}

function draw() {
  // put drawing code here
  image(capture, 0, 0, width, height);

  loadPixels();
  // 处理像素
  for (var h = 0; h < width; h++) {
    for (var w = 0; w < height; w++) {
      var pixelIndex = (h + w * width) * 4;
      // 修改像素
      pixels[pixelIndex] = 0;
      // pixel[pixelIndex + 1] = 0;
      // pixel[pixelIndex + 2] = 0;
      // pixel[pixelIndex + 3] = 0;
    }
  }
  updatePixels();

}