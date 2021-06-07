class Launcher{
    constructor(bodyA, pointB){
        var opt = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.launch = Constraint.create(opt);
        this.pointB=pointB;
        World.add(world, this.launch);

    }
    
    fly(){
        this.launch.bodyA =null;
        
    }
    display(){
        if(this.launch.bodyA){
        var pointA = this.launch.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("yellow");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        }
    
}
    
