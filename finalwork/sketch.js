// 最終課題を制作しよう
let d, size, x, y, vx, vy, r, blue, m, n, kiiro, grabbed;
function setup(){
  createCanvas(windowWidth, windowHeight);

  blue = color(0, 51, 160);
  kiiro = color(255, 204, 0);

  d = height / 9;
  size = d * 5;

  x = width / 2;
  y = height / 2;
  vx = 3;
  vy = 3;
  n = 255;
  m = 0
  reset();
}

function reset(){
  x = width / 2;
  y = height / 2;
  grabbed = false;
}

function keyPressed(){
  if(key == " "){ reset(); } // スペースキーを押したらリセット
}

function greeceprint(m, n){
  for(let i = 0; i < 10; i++){
    if(i % 2 == 0){
      fill(n);
    }else{
      fill(m);
    }
rect(0, i * d, width,  d);
}

fill(n);
rect(0, 0, size, size);

fill(m);
rect(size /2 - d / 2, 0, d, size);
rect(0, size / 2 - d / 2, size, d);
}


function draw(){
  push();
  greeceprint(m, n);
  if(x < width / 4 && y > height /2){
    greeceprint(255, blue);
  }
  if(x < width / 4 && y <= height /2){
    greeceprint(blue, 255);
  }
  if(x >= width / 4 && x < width * 3 / 4 ){
   greeceprint(kiiro, 255);
  }
  if(x >= width / 4 && x < width * 3 / 4 && y > height / 2){
    greeceprint(kiiro, blue);
  }
  if(x >= width * 3 / 4 && y > height / 2){
    greeceprint(kiiro, '#00ff00')
  }
   pop();
  fill('#00ff00');
  ellipse(x, y, 60);

  // 速度＝位置の増分
if(!grabbed ){
  x += vx  ;
  y += vy  ;

  // 跳ね返り
  if(x < 0 || x > width){
     vx = -1 * vx;
     //greeceprint();
    } // 横
  if(y < 0 || y > height){ vy = -1 * vy; } // 縦


  // x座標, y座標を画面内にする
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}
if(grabbed){
  x += 0;
  y += 0;
}
  if(grabbed){
    if(x < width / 4 && y > height /2){
    textSize(100);
    textFont('Helvetica');
    text('Greece!', width / 4, height / 2);
  }else{
    stroke(0);
    textSize(100);
  textFont('Helvetica');
  text('Not Greece. Press space key.', width / 7, height / 2);
}
}

}



function mousePressed(){
  grabbed = dist(mouseX, mouseY, x, y) < 50; // 新登場: distは２点の距離を求める関数
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
