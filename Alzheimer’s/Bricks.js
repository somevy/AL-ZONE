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
      this.gamestate = 0 //play
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
    //get numbers
    // for(let i = 1; i<this.level+1; i++){
    //   this.numbers.push(i);
    // }    
    //get all vals
    for(let i = 0; i< this.level; i++){
        this.pos.push([this.x[i],this.y[i]//,this.numbers[i]
        ])
        //this.buttonText = i+1
        this.buttons[i] = createButton(i+1//this.buttonText
        ); 
        this.buttons[i].class('memory-bricks'); //added class to bricks
        this.buttons[i].style('label','bvh');
        this.buttons[i].position(this.pos[i][0],this.pos[i][1])
        this.buttons[i].size(width / this.level - 10, height / this.level - 10)
    }
  }
  showlevel() {
    for (let i = 0; i < this.buttons.length; i++) {
      this.buttons[i].mouseClicked(() => this.clicked(i));
      
    }
  }
  clicked(i){
    this.buttons[i].remove()
    this.buttons.splice(i,1);
    if(i > 0){//basically, this.buttons.indexOf(this.buttons[0]) = 0
      this.gamestate = 1; // u lose
    } else if(this.buttons.length == 0){
      this.gamestate = 2; // u win
    }else {this.points++}
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
    this.getloc()
    this.showlevel() //play

  }
   nextlevel(){
    this.level++
    this.reset()
  }
}//make button text invisible