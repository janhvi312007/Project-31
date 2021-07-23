class Drop{
    constructor(x,y){
     var options={
         restitution:0.8,
         friction:0.4,
         density:0.4
     }
     this.body=Bodies.circle(x,y,5);
     this.radius= 5;
     World.add(world,this.body)
     
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random (0,800),y:random (0,800)})
        }
    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
}
