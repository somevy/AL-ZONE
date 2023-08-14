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
  score = createP("YOUR SCORE: "+ brick.points)
  score.class("text-memory-game")
  score.position(0,70)
  score.center('horizontal')
  score.id("p1")
  score.hide()
  highS = createP("YOUR HIGHSCORE: "+ brick.highscore)
  highS.class("text-memory-game")
  highS.id("p2")
  highS.position(0,140)
  highS.center('horizontal')
  highS.hide()
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
    document.getElementById("p1").innerHTML = "YOUR SCORE: "+ brick.points;
    document.getElementById("p2").innerHTML = "YOUR HIGHSCORE: "+ brick.highscore;
    brick.hidebuttons()
    score.show()
    highS.show()
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
  score.hide()
  highS.hide()
}
function restart(){  
  
  brick.points = 1;
  brick.level = 4;
  brick.reset()
}
function nextLevel(){
  brick.nextlevel()
}