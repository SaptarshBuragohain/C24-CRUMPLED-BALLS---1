class Paper {
  constructor(x, y, radius) {  
     var options = {
        'restitution':0.3,
        'friction':0.7,
        'density':1.2,
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.image = loadImage("paper.png");
    this.width = 60
    this.height= 60
    
      
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    strokeWeight(4);
    stroke("white")
    fill(255);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
};
