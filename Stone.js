class Stone{
    constructor(x,y,width,height){
    var options = {
        restitution : 0.8,
        friction : 0.9,
        density : 12
    }
    this.stone = Bodies.rectangle(x,y,width,height,options)
    this.width = width
    this.height = height
     World.add(world,this.stone)
  }
     display(){
    var pos = this.stone.position
    var angle = this.stone.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle) 
    stroke("black")
    fill("black")
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop()  

     }
}