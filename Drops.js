class Drops{
    constructor(x,y,r){
        var options = {
            friction:0.1
        }
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
        this.drop = [];
        World.add(world,this.rain);
    }

    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)});
        }
    }

    display(){
        var pos = this.rain.position;
        var angle = this.rain.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,4,4);
        pop();
    }
}