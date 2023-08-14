let gamestate = 0;
let button1 = 0;
let button3 = 0;
let button4 = 0;
let button5 = 0;
let backbutton1 = 0;
let num1;
let num2;
let sign;
let mathstate = 0;
let answer;
let answerstate = 0;
let button2 = 0;
let button2sig = 0;
let check = 0;
let score = 0;
let incorrect = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('League Spartan');
}

function draw() {

  background(60,90,107);

  button1 = 0;
  button3 = 0;
  button4 = 0;
  button5 = 0;
  button2sig = 0;
  backbutton1 = 0;

if(gamestate == 0){

button1 = 0;
button3 = 0;
button4 = 0;
button5 = 0;
backbutton1 = 0;
mathstate = 0;
answer;
answerstate = 0;
button2 = 0;
button2sig = 0;
check = 0;

  fill(170, 187, 163)
  rect(windowWidth*0.05, windowHeight*0.6, windowWidth*0.9, windowHeight*0.4, 10)

  fill(88, 154, 123)
 rect(windowWidth*0.85, windowHeight*0.71889-10, 40, 40, 10);
  if(mouseX > windowWidth*0.85 && mouseX < windowWidth*0.85+20 + 25 && mouseY > windowHeight*0.71889-10 && mouseY < windowHeight*0.71889-10 + 25){
    fill(88, 130, 69)
    rect(windowWidth*0.85, windowHeight*0.71889-10, 40, 40, 10); 
  }
  
  button(windowWidth/20, windowHeight*0.2, windowWidth*0.9, 50,1,10);

  strokeWeight(0);
  fill(88, 154, 123)
  rect(windowWidth/20, windowHeight*0.3, windowWidth*0.9, 50, 10);
  if(mouseX > windowWidth/20 && mouseX < windowWidth/20 + windowWidth*0.9 && mouseY > windowHeight*0.3 && mouseY < windowHeight*0.3 + 50){
    fill(88, 130, 69)
    rect(windowWidth/20, windowHeight*0.3, windowWidth*0.9, 50, 10); 
    button3 = 1;

  }
   fill(88, 154, 123)
  rect(windowWidth/20, windowHeight*0.4, windowWidth*0.9, 50, 10);
  if(mouseX > windowWidth/20 && mouseX < windowWidth/20 + windowWidth*0.9 && mouseY > windowHeight*0.4 && mouseY < windowHeight*0.4 + 50){
    fill(88, 130, 69)
    rect(windowWidth/20, windowHeight*0.4, windowWidth*0.9, 50, 10); 
    button4 = 1;
  }

  fill(88, 154, 123)
  rect(windowWidth/20, windowHeight*0.5, windowWidth*0.9, 50, 10);
  if(mouseX > windowWidth/20 && mouseX < windowWidth/20 + windowWidth*0.9 && mouseY > windowHeight*0.5 && mouseY < windowHeight*0.5 + 50){
    fill(88, 130, 69)
    rect(windowWidth/20, windowHeight*0.5, windowWidth*0.9, 50, 10); 
    button5 = 1;
  }

textSize(45);
fill('white');
push();
textStyle(BOLD);
text("Math Game", windowWidth*0.05, windowHeight*0.15)
pop();

  
    //inp.position(windowWidth*999, windowWidth*999);

  textSize(20)
  fill('white')
  text('With single digit adding & subraction', windowWidth/18, windowHeight*0.25);
 
  text('With double digit adding & subraction', windowWidth/18, windowHeight*0.35);

  text('With single digit multiplication', windowWidth/18, windowHeight*0.45);
 
  text('With single to double digit multiplication', windowWidth/18, windowHeight*0.55);
textSize(30);
  fill('white')
  text('↑', windowWidth*0.85+10, windowHeight*0.7189+20)

} 

if(gamestate == 1){
  background(62, 62, 62)
  fill("white")
  textSize(50)
  math(10,10);

  check = 0;
  }

  if(gamestate == 2){
  background(62, 62, 62)
  fill("white")
  textSize(50)
  math(100,100);

  check = 0;
  }

  if(gamestate == 3){
  background(62, 62, 62)
  fill("white")
  textSize(50)
  times(10,10);

  check = 0;
  }

  if(gamestate == 4){
  background(62, 62, 62)
  fill("white")
  textSize(50)
  times(100,10);

  check = 0;
  }

  if(gamestate != 0){
    textSize(30);
  fill('white')
  text('↑', windowWidth*0.85+10, windowHeight*0.718889+20)
    backbutton();
    fill('white')
textSize(40);
  text('Return to Home Page', windowWidth*0.075, windowHeight*0.9)
  }

  //fill('white')
  textSize(20)
  text('Score: ' + score, windowWidth*0.75, windowHeight/10)
  text('Incorrect: ' + incorrect, windowWidth*0.75, windowHeight/10+20)
}



function backbutton(){
  strokeWeight(0);
  fill(88, 154, 123)
  rect(windowWidth/20, windowHeight*0.8, windowWidth*0.9, windowHeight*0.2, 10);
  if(mouseX > windowWidth/20 && mouseX < windowWidth/20 + windowWidth*0.9 && mouseY > windowHeight*0.8 && mouseY < windowHeight*0.8 + windowHeight*0.2){
    fill(88, 130, 69)
    rect(windowWidth/20, windowHeight*0.8, windowWidth*0.9, windowHeight*0.2, 10); 

    backbutton1 = 1;
}
  
}


function button(Lox,Loy,Buh,Buy,Bumax, ) {
  strokeWeight(0);
  fill(88, 154, 123)
  rect(Lox, Loy, Buh, Buy, 10);
  if(mouseX > Lox && mouseX < Lox + Buh && mouseY > Loy && mouseY < Loy + Buy){
    fill(88, 130, 69)
    rect(Lox, Loy, Buh, Buy, 10); 
    button1 = Bumax;
  }
}

function mouseClicked(){
  if(gamestate == 0){
    if(button1 == 1){
    gamestate = 1
    }
    if(button3 == 1){
      gamestate = 2
    }
    if(button4 == 1){
    gamestate = 3
   }
    if(button5 == 1){
    gamestate = 4
   }
  }
  if(button2 == 1){
    if(button2sig == 1){
      check = 1;
    }
  }

  if(gamestate != 0){
    if(backbutton1 == 1){
      gamestate = 0;
    }
  }
  
}

function math(up, up1){

if(mathstate == 0){
   num1 = round(random(0, up));
   num2 = round(random(0, up1));
   sign = round(random(0,1));
  if (sign < 0.5){
    text(num1 + ' - ' + num2, windowWidth/10, windowWidth/10+50)
    signstate = 0;
  }
  if (sign >= 0.5){
    text(num1 + ' + ' + num2, windowWidth/10, windowWidth/10+50)
    signstate = 1;

}
  mathstate = 1;
}
  if(sign < 0.5){
    text(num1 + ' - ' + num2, windowWidth/10, windowWidth/10+50)
    }
  if (sign >= 0.5){
    text(num1 + ' + ' + num2, windowWidth/10, windowWidth/10+50)
    }
  button2 = 1
  if(button2 == 1){
  fill(88, 154, 123)
  rect(windowWidth*0.85, windowHeight*0.71889-10, 40, 40, 10);
  if(mouseX > windowWidth*0.85 && mouseX < windowWidth*0.85+20 + 25 && mouseY > windowHeight*0.71889-10 && mouseY < windowHeight*0.71889-10 + 25){
    fill(88, 130, 69)
    rect(windowWidth*0.85, windowHeight*0.71889-10, 40, 40, 10); 
    button2sig = 1
  }
  }
  
  if(answerstate == 0){
  let inp = createInput('');
  inp.position(windowWidth/31+30, windowHeight*0.7);
  inp.size(windowWidth*0.8-40);
  inp.class("math-input");
  //if(check == 1){
  inp.input(myInputEvent);
 // }
  answerstate = 1
  }
  if(check == 1){
  if(sign < 0.5){
    if(answer == num1-num2){
      print('correct')
      score = score+1
      mathstate = 0;
    } else {
      print('wrong')
      incorrect = incorrect+1
    }
  }
  if(sign >= 0.5){
    if(answer == num1+num2){
      print('correct')
      score = score+1
      mathstate = 0;
    } else print('wrong')
    incorrect = incorrect+1
  }
  }
}




function times(up, up1){

if(gamestate != 0){
if(mathstate == 0){
   num1 = round(random(0, up));
   num2 = round(random(0, up1));
  
    signstate = 0;
  mathstate = 1;
}

    text(num1 + ' x ' + num2, windowWidth/10, windowWidth/10+50)

  button2 = 1
  if(button2 == 1){
  fill(88, 154, 123)
  rect(windowWidth*0.85, windowHeight*0.71889-10, 40, 40, 10);
  if(mouseX > windowWidth*0.85 && mouseX < windowWidth*0.85+20 + 25 && mouseY > windowHeight*0.71889-10 && mouseY < windowHeight*0.71889-10 + 25){
    fill(88, 130, 69)
    rect(windowWidth*0.85, windowHeight*0.71889-10, 40, 40, 10); 
    button2sig = 1
  }
  }
  
  if(answerstate == 0){
  let inp = createInput('');
  inp.class("math-input");
  inp.position(windowWidth/31+30, windowHeight*0.7);
  inp.size(windowWidth*0.8-40);
  inp.input(myInputEvent);
  answerstate = 1
  }
  if(check == 1){
    if(answer == num1*num2){
      print('correct')
      score = score+1
      mathstate = 0;
  } else {
      print('wrong')
      incorrect = incorrect+1
  }
  }
}

}


function myInputEvent() {

  
  answer = this.value();


}
