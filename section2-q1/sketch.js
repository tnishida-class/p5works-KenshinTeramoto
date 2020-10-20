// 小手調べ
function setup(){
  createCanvas(200, 200);
  fill(0);
  for(let i = 0; i < 10; i++){
    // BLANK[1]
    noFill();
   if(i < 6){
     stroke(0, 0, 255);
   } else{
     stroke(255, 0, 0);
   }
   let s = i *10 + 1;
   ellipse(50, 50, s);
    }
  }
