let numRings = 10
let radius
let strWeight = 20

function setup(){
    createCanvas(800, 800)
    colorMode(HSB, TWO_PI, 1, 1)

    radius = width * 0.1
}

function draw(){
    background(0)
    stroke(255,0, 0)
    noFill()
    strokeWeight(strWeight)

    for (let i = 0; i < numRings; i ++){
        push()
        //translate to the center of screen
        translate(width*0.5, height*0.5) 
        //tamer towards the middle, last number is amplitude
        rotate(sin(millis() * 0.001 * (i*0.5+1) * 0.5))
        stroke(i*TWO_PI/numRings, 0.8, 0.8)
        //draw around 0, 0 points
        arc(0, 0, radius*2 + i*strWeight*2, radius*2 + i*strWeight*2, PI*0.75, PI*0.25) 
        pop()
    }
}

//radius*2 = diameter