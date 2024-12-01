/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// Global variables for Artist's position and orientation
var x, y;
var angle;

function radian(degree) {
    return degree * Math.PI / 180;
}

function moveForward(distance, context) {
    let a = radian(angle);
    x = x + distance * Math.cos(a);
    y = y + distance * Math.sin(a);
    context.lineTo(x, y);    
}

function turnRight(degree) {
    angle = angle - degree;
    if (angle < 0) angle = angle + 360;
}

function turnLeft(degree) {
    angle = angle + degree;
    if (angle > 360) angle = angle - 360;
}

function DrawSpiral(context) {
    // Inspired by Express Course (2024) Lesson 29: For Loops with Artist
    // https://studio.code.org/s/express-2024/lessons/29/levels/5

    
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;
    
    angle = 0.0; 
    context.moveTo(x, y);
    context.beginPath();
    let distance = 10; 
    let turns = [45, -90];
    let turnIndex = 0;

    for (let counter = 0; counter < 1200; counter++) {
        moveForward(distance, context);
        context.stroke();

        if (turnIndex % 2 === 0) {
            turnRight(turns[turnIndex % turns.length]);
        } else{
            turnLeft(turns[turnIndex % turns.length]);
        }
        turnIndex++;

        if (counter % 10 === 0) {
            distance += 2;
        }
    }
}