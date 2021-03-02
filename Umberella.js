class Umberella{
    constructor(x,y,radius){
    {
        var options = {
            isStatic : true,
            
                  
        }
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    World.add(darshasWorld, this.body);
    this.image = loadImage("images/Walking Frame/walking_1.png");
    
}
display()
{
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y+70,500 , 500);
}
}