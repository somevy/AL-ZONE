class Bricks {
    constructor() {
      this.x=[]
      this.y=[]
      this.pos = []
      this.level = 4
      this.xvalus = []
      this.yvalus = []
      this.points = 1;
      this.highscore = 1;
     // this.numbers = []
      this.buttons = []
      //this.buttonText;
      this.clickstate = 0;
      this.gamestate = 0 //play
      this.rect = [];
    }

  getloc() {
    // get random x,y valus
    for (let i = 0; i < this.level; i++) {
      this.xvalus.push(width / this.level * i)
      this.yvalus.push(height / this.level * i)
    }  
    for(let i = 0; i< this.level; i++){
      let xv = random(this.xvalus)
      let yv = random(this.yvalus) 
      this.x.push(xv)
      this.y.push(yv)      
      this.xvalus.splice(this.xvalus.indexOf(xv),1)
      this.yvalus.splice(this.yvalus.indexOf(yv),1)
    }
    //get all vals
    for(let i = 0; i< this.level; i++){
        this.pos.push([this.x[i],this.y[i]])

        this.buttons[i] = createButton(i+1); 
        this.buttons[i].class('memory-bricks');
        this.buttons[i].position(this.pos[i][0],this.pos[i][1])
        this.buttons[i].size(width / this.level - 10, height / this.level - 10)
        this.buttons[i].hide()
        this.buttons[i].id(i)    
        // this.rect[i] = createButton("")//this.pos[i][0]+this.buttons[i].width/2,this.pos[i][1] + this.buttons[i].height/2,50,50
        // this.rect[i].class('memory-bricks');

        // this.rect[i].size(50,50)
        // this.rect[i].position(this.pos[i][0]+this.buttons[i].width/2 -this.rect[i].width/2,this.pos[i][1] + this.buttons[i].height/2 - this.rect[i].height/2)
        // this.rect[i].hide()
    }
  }
  showlevel() {
    let id = document.getElementsByClassName('memory-bricks')
    for (let i = 0; i < this.buttons.length; i++) {
      this.buttons[i].show()
      this.buttons[i].mouseClicked(() => this.clicked(i));    
      if(this.clickstate == 1){
        // this.rect[i].show(); 
        // this.rect[i].mouseClicked(() => this.clicked(i)); 
        id[i].innerHTML = ""
    }
    }

  }
  clicked(i){
    this.clickstate = 1;
    this.buttons[i].remove()
    this.buttons.splice(i,1);
    // this.rect[i].remove()
    // this.rect.splice(i,1);
    if(i > 0){//basically, this.buttons.indexOf(this.buttons[0]) = 0
      this.gamestate = 1; // u lose
    } else if(this.buttons.length == 0){
      this.gamestate = 2; // u win
    }else {
      this.points++     
      if(this.points>this.highscore){
      this.highscore = this.points;
    } }
  }
   reset(){
    this.x=[]
    this.y=[]
    this.pos = []
    this.xvalus = []
    this.yvalus = []
    this.gamestate = 0;    
    for(let i = 0; i < this.buttons.length; i++){
      this.buttons[i].remove()
    }
    this.buttons = []
    this.rect = []
    this.clickstate = 0;
    this.getloc()
    this.showlevel() //play

  }
  hidebuttons(){
    for(let i = 0; i < this.buttons.length; i++){
      this.buttons[i].hide()
      //this.rect[i].hide()
    }
  }
   nextlevel(){
    this.level++
    this.reset()
  }
}