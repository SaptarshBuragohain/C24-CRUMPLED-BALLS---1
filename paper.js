class Paper {
  constructor(x, y, radius) {
    var options = {
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.body = Bodies.circle(x, y, radius, options);
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
    stroke("blue")
    fill(255);
    ellipse(25, 25, 20,20);
    pop();
  }
};
