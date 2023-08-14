//import {Bricks} from "./Bricks" 
let brick = new Bricks()
let restartB,nextB,backB;

function setup() {
  createCanvas(1263,617);
  brick.getloc()
  backB = createA("menumemory.html", "Back/Home") //made it into a link back to homepage
  backB.class("memory-option-buttons") //added class :)
  backB.position(backB.center('horizontal'),(height/2) + 70)
  backB.hide()
  restartB = createButton("Restart")
  restartB.class("memory-option-buttons")
  restartB.center()
  restartB.hide()
  nextB = createButton("Next Level")
  nextB.class("memory-option-buttons")
  nextB.center()
  nextB.hide()
}

function draw() {
  background(0);
  if (brick.gamestate >0){
    background(100);
        textAlign(CENTER,CENTER)


    if (brick.gamestate == 1) {//lost
    restartB.show()
    restartB.mousePressed(restart)
    } else { // u win
      nextB.show()
      nextB.mousePressed(nextLevel)
    }     

    text("YOUR SCORE: "+ brick.points,width/2,(height/2)-70)
    text("YOUR HIGHSCORE: "+ brick.highscore,width/2,(height/2)-70)
    backB.show()
  } else {//play
    hideall()
    brick.showlevel()
  }
}
function hideall(){
  background(72);
  backB.hide()
  restartB.hide()
  nextB.hide()
}
function restart(){  
  brick.reset()
  brick.points = 1;
  brick.level = 4;
}
function nextLevel(){
  brick.nextlevel()
}