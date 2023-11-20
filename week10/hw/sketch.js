let snowflakes = []; // array to hold snowflake objects
let c1,c2;
let snow;

function setup() {
    createCanvas(400, 600);
    snow = new snowStorm();
  }

function draw() {
  background(0,255);
  snow = new snowStorm();
  //snow.update();
  c1 = color(255);
  c2 = color(63, 191, 191);
  
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }

  snow.update();
  let t = frameCount / 400; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}

function snowStorm() {
  this.pos = []; /// Each flake's location
  this.vel = []; /// Each flake's speed (related to scale).
  this.size = []; /// The flake's size (related to distance).
  this.flow = []; /// Adds a generalized noise movement
  this.breeze = []; /// Adds a wind force using noise
  this.rot = []; /// Spin the snowflakes
  this.yoff = []; /// Each flake's unique noise value
  let dense = 50; /// How many flakes
  let sizeset = 0; /// Set the size based on order in array.
  
  for (let i = 0; i < dense; i++) {
    this.yoff.push(random(1000));
    this.pos.push(createVector(random(width),random(height)));
    
    /// Set the size using lerp.  This will make more small
    /// flakes with fewer large ones to add depth to the scene.
    sizeset = lerp(sizeset,5,0.1);
    this.size.push(7-sizeset);
    
    /// Smaller flakes are in the distance, and should fall
    /// slower to maintain perspective.  Set velocities to scale.
    this.vel.push(createVector(0,this.size[i])); 
    this.vel[i].mult(1.25);
    
    /// Each flake will fall in a general direction plus
    /// each flake has a unique deviation.  This simulates how
    /// aerodynamics disturb the constant rate of descent.
    this.flow.push(0);
    this.breeze.push(random(0.75));
    this.rot.push(random(-PI,PI));
  }
    
  this.update = function() {
    for (let i = 0; i < dense; i++) {
      this.yoff[i] += 0.05;
      this.pos[i].add(this.vel[i]);
      
      /// Generate common movement.
      this.flow[i] = map(noise((i+1)*0.01,
                               this.yoff[i],
                           frameCount*0.01),
                         0,1,
                         -this.size[i]*4,
                         this.size[i]*4);
      
      /// Generate unique rotation.
      this.rot[i] =  map(noise(this.yoff[i]*0.1,
                           frameCount*0.00001),
                         0,1,
                         -TWO_PI,
                         TWO_PI);
      
      /// Provide for left or right wind force.
      let switchmove = map(noise(this.yoff[i]*0.1,
                                 frameCount*0.005),
                           0,1,
                           -3,3);
      /// Applies scale to wind force.
      let move = map(this.size[i],1,5,0.1,2);
      move *= switchmove;
      
      /// Accumulate the wind force.
      this.pos[i].x += move;
      

      this.bounds(i);
      
      push();
      /// Brighter colors in front (large flakes),
      /// dimmer colors in back (small flakes).
      let scol = map(this.size[i],1,5,64,255);
      stroke(scol,150);
      // stroke(0,scol,scol,150);
      strokeWeight(this.size[i]);
      
      
      push();
      translate(this.pos[i].x+this.flow[i],
            this.pos[i].y+this.flow[i]);
      rotate(this.rot[i]);
      
      /// Change the shape of the snowflakes.
      let flip = map(this.rot[i],-TWO_PI,TWO_PI,
                     -this.size[i]*4,
                     this.size[i]*4);
      
      let scale = this.size[i];
      line(-scale-flip,0,
           scale+flip,0);
      line(0,scale+flip,
           0,-scale-flip);
      line(scale,scale,
           -scale,-scale);
      line(scale,-scale,
           -scale,scale);
      pop();
      
      pop();
      
    }
  }
  
  this.bounds = function(i) {
    /// Reset to top or wrap-around when
    /// out-of-bounds.
    /// Keep current size, and factor velocity.
    
    if (this.pos[i].y > height) {
      this.pos[i] = createVector(random(width),0);
      this.vel[i] = createVector(0,this.size[i]);                  
      this.vel[i].mult(1.25);
    }
    if (this.pos[i].x > width) {
      this.pos[i].x = 0;
    }
    if (this.pos[i].x < 0) {
      this.pos[i].x = width;
    }
  }
  
}