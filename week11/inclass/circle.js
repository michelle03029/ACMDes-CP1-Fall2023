class Circle {
    constructor(){
      this.x = width*0.5
      this.y = height*0.5
      this.velX = random(-3, 3)
      this.velY = random(-3, 3)
      this.radius = 40
      this.clr = color(255, 0, 0)
    }
    display(){
        fill(this.clr)
        circle(this.x, this.y, this.radius*2)

    }
    move(){
        if(this.x + this.radius >= width || this.x - this.radius <= 0){
            this.velX *= -1
        }
        if(this.y + this.radiu >= height || this.y - this.radius <= 0){
            this.velY *= -1;
        }
        this.x = this.x + this.velX
        this.y = this.y + this.velY
    }
}