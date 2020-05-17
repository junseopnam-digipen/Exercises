// Junseop nam
// Draw a Deck of Cards
// CS099
// Spring 2020.5.4


function setup() {
  createCanvas(650, 400);
}

function draw() {
  background(220);
  let x = 10;
  let y = 30;
  let shape = 0; 
  let number = 1;
  
  for(let card = 0; card<4; ++card)
  {
    x = 10;
    for(let deck1 = 0; deck1 < 13; ++deck1 )
    {
      RECT(x,y);
      SHAPE(x,y, shape);
      shape++;
      if(shape > 3)
    {
    shape = 0;
    }
      Number(x,y,number);
      number++
      if(number >13){
         number = 1; 
         }

    x += 50;
    } 
    y += 100;
  }
}
  
function RECT(a,b) {
  rect(a,b,30,50);
}

function SHAPE(a,b,shape){
  switch (shape){
    case 0:
      push()
      fill('red');
      noStroke()      
      ellipse(a+11, b+20, 8,10);
      ellipse(a+19, b+20, 8,10);
      triangle(a+7, b+20, a+15, b+35, a+23, b+20);
      pop()
      break;
    case 1:
      push()
      noStroke()
      fill(0);
      ellipse(a+11, b+25, 9,10);
      ellipse(a+19, b+25, 9,10);
      triangle(a+7, b+23, a+15, b+10, a+23, b+23);
      rect(a+12.5, b+ 20, 5, 15);
      rect(a+11, b+33, 8, 3);
      pop()
      break;                      
    case 2:
      push()
      noStroke()
      fill('red')
      beginShape()
      vertex(a+15, b+10)
      vertex(a+5, b+22)
      vertex(a+15, b+35)
      vertex(a+25, b+22)
      endShape(CLOSE)
      pop()
      break;
    case 3:
      push()
      noStroke()
      fill(0);
      circle(a+11, b+23,10);
      circle(a+19, b+23,10);
      circle(a+15, b+17,10);
      rect(a+13.5, b+ 20, 3, 15);
      pop()
      break;      
  }
}

function Number(a,b,number){
  if(number != 1 && number !=11 && number !=12 && number !=13 && number !=10){
      text(number,a,b+13);
      text(number,a+23,b+47);
  }
  else if(number == 1){
    text('A',a,b+13);
    text('A',a+23,b+47);
  }
  else if(number == 11){
    text('J',a,b+13);
    text('J',a+23,b+47);
  }
  else if(number == 12){
    text('Q',a,b+13);
    text('Q',a+20,b+47);
  }
  else if(number == 13){
    text('K',a,b+13);
    text('K',a+23,b+47);
  }
  else if(number == 10){
    text('10',a,b+13);
    text('10',a+15,b+47);
  }
}    