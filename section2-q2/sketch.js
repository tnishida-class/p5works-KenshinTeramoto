// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      let s = i * size;
      let t = j * size;
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
if(i % 2 == 1){
  if(j % 2 == 0 ){
    fill(150);
    rect(s, t, size, size);
  }else{
    fill(255);
    rect(s, t, size, size);
  }
}else{
  if(j % 2 == 1){
    fill(150);
    rect(s, t, size, size);
  }else{
    fill(255);
    rect(s, t, size, size);
  }
}if(j < 3) {
  if( j % 2 == 0){
  if(i % 2 == 1){
    fill(255, 0 , 0);
    ellipse(s+ size / 2, t +size / 2, size);
  }
}else if (i % 2 ==0){
  fill(255, 0, 0);
  ellipse(s+ size / 2, t +size / 2, size);
}
}
if(j > 4 && j < 8){
  if( j % 2 == 1){
    if(i % 2 == 0){
      fill(0);
      ellipse(s+ size / 2, t +size / 2, size);
    }
  }else if(j % 2 ==0){
    if(i % 2 == 1){
      fill(0);
      ellipse(s+ size / 2, t +size / 2, size);
    }
  }
}
      }
  }
  }
