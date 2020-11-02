// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 195);
}

function balloon(t, n){
  let w = textWidth(t);
  let h = textAscent(t) + textDescent(t);
  let p = 2;
  noStroke();
  fill(n);
  rect(0, 0, w + p * 2, h + p * 2);
  fill(n);
  triangle((w + p * 2) -10, h + p * 2, w + p * 2, (h + p * 2)- 10, (w + p * 2)+ 10, (h + p * 2)+ 10);
  fill(255);
  text(t, p, h + p);
}
