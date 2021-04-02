class launcher{
    
    constructor(body,pointB){
        
var options={
    bodyA:body,
    pointB:pointB,
    stiffness: 0.04,
    length: 10
}
this.bodyA=body;
this.pointB=pointB;
this.launcher=Constraint.create(options);
World.add(world,this.launcher);
    }

    fly(){
        this.launcher.bodyA=null
    }
    attach(body){
        this.launcher.bodyA=body;
        
    }

    display(){
        if(this.launcher.bodyA){
            strokeWeight(2);
        line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }
}