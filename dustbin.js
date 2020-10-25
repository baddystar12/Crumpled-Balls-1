class Dustbin {
    constructor(x, y, width, height){
        var dustbin_options ={
            restitution:1,
            friction:2,
            density:1
        }
        this.body = Bodies.rectangle(x,y,width,height, dustbin_options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        var angle = this.body.angle;
        push();
        translate(position.x, position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
        rect(0,0, this.width, this.height);
        pop();
    }
}