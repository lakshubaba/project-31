class Drops{
    constructor(x,y)
    {
        var options = {
            "restitution": 0.1,
            "friction": 0.01,
            "density": 0.5
        }
        this.body = Bodies.circle(x, y, 2, options);
        World.add(darshasWorld, this.body);
    }
    display()
    {   
        
             
        fill("white");
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, 4, 4);
   
    }

    update()
    {
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x:random(0,1400), y:random(0,1400)})
        }
    }
}