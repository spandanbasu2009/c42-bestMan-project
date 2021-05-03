class Drops{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            friction:0.1
        }
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
    }

    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)});
        }
    }
}