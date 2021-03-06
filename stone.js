class Stone {
    constructor(x, y) {
      var options = {
          isStatic: true,
          restitution: 0,
          friction: 1,
          density: 1.2
      }
      this.body = Bodies.circle(x, y, 60, options);
      this.image = loadImage("sprites/stone.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      fill("green");
      image(this.image, 0,0, 50, 50);
      pop();

    }
};