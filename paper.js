class Paper {
    constructor(x, y){
        var paper_options = {
            friction : 0.5,
            density : 1.2,
            restitution: 0.3,
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,width, height, paper_options);
        this.height = 50;
        this.width = 50;
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        var angle = this.body.angle;
        push();
        translate(position.x, position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("turquoise");
        rect(0, 0, this.width, this.height);
        pop();
    }
}