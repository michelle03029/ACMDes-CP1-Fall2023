let myCircle

function setup() { 
    createCanvas(600, 400);
    myCircle = new Circle()
}

function draw() {
    background(220);

    myCircle.move()
    myCircle.display()
}