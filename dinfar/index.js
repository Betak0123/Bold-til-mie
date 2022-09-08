let x,y,diameter
let speedy = 5
let speedx = 5
let r,g,b

function setup(){
    speedx = 5
    x = .5*windowWidth
    y = .5*windowHeight
    diameter = 60
    r = random(0, 255)
    g = random(0, 255)
    b = random(0, 255)


    frameRate(60)
    createCanvas(windowWidth, windowHeight)
    background('black') 
    fill(r, g, b)   
    ellipse(x, y, diameter, diameter)
    console.log(windowHeight-diameter/2)
}

function draw(){
    fill(r, g, b)   
    //mouseX mouseY frameCount map
    console.log(r,g,b)
    // console.log(y)
    y = y + speedy
    x = x + speedx
    background('black')    
    ellipse(x, y, diameter, diameter)
    if(y > windowHeight-diameter){
        speedy = -5
        r = random(0, 255)
        g = random(0, 255)
        b = random(0, 255)
    }else if(y < diameter){
        r = random(0, 255)
        g = random(0, 255)
        b = random(0, 255)
        speedy = 5
    }
    if(x > windowWidth-diameter){
        r = random(0, 255)
        g = random(0, 255)
        b = random(0, 255)
        speedx = -5
    }else if(x < diameter){
        r = random(0, 255)
        g = random(0, 255)
        b = random(0, 255)
        speedx = 5
    }
    // if(speed = -5 && y < diameter ){
    //     speed = 5
    //     console.log('under')
    // }
}

// function mousePressed(){
//     select('#info').html('Hovsa! uwu')
// }

// function mouseReleased(){
//     select('#info').html('skriv her!')
// }

// function keyPressed(event){
//     select('#info').html('Du trykkede: ' + event.key)
// }