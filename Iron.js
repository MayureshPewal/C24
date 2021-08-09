class Iron{
    constructor(x,y,width,height){
        var options = {
            restitution : 0.5,
            friction : 3,
            density : 30
        }

    this.iron = Bodies.rectangle(x,y,width,height,options)
    this.width = width
    this.height = height
    World.add(world,this.iron)
   }


display(){
    var pos = this.iron.position
    var angle = this.iron.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    stroke("brown")
    fill ("brown")
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop()
     } 

 }