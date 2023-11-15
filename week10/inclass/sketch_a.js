let angle = 0

function setup(){
    createCanvas(800, 600)

}

function draw(){
    background (200, 215, 205)


    //ROTATING A RECTANGLE
    fill(225, 190, 210)
    push()
    translate(100, 200)
    rotate(QUARTER_PI)
    rect(0, 0, 150, 100)
    pop()


    push()
    translate(width * 0.5, height * 0.5)
    rotate(angle)
    fill(180, 230, 205)
    ellipse(0, 0, 300, 200)
    pop()

    //rotation
    angle += 0.01
    //drawGrid()
}

function drawGrid(){
    //DRAWING A GRID
    for(let x = 0; x <= width; x += (width/10)){
        stroke(255, 0, 0)
        line(x, 0, x, height)
    }
    
    for(let y = 0; y <= height; y += (height/10)){
        stroke(0, 0, 255)
        line(0, y, width, y)
    }
}