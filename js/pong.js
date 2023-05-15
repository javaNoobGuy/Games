const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");

const screenWidth = 1600;
const screenHeight = 1400;
const π = Math.PI;

var time = 0;
var i = 0;
const angles = [0, 90, 180, 270];

var mouseX = 0;
var mouseY = 0;


context.fillStyle = "black";
context.fillRect(0, 0, screenWidth, screenHeight);

let rectX = 0;

//classes

canvas.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    console.log(mouseX + " X");
    console.log(mouseY + " Y");
  });

const net = {

    width : 2,
    height: 10,
    x : screenWidth/2 - 2/2,
    y : 0,
    color : "WHITE",


}

const ball = {

    x : screenWidth/2,
    y : screenHeight/2,
    radius : 30,
    angle : 0,
    speed : 5,
    velocityX : 5 * Math.cos(90 * π/180),
    velocityY: 5 * Math.sin(90 * π/180),

    color : "WHITE"


}

const user = {

    x : 0,
    width : 30,
    height : 100,
    y : screenHeight / 2 - 50,
    color : "WHITE",
    score : 10,



}

const com = {

    width : 30,
    height : 100,
    x : screenWidth - 30,
    y : screenHeight / 2 - 50,
    color : "WHITE",
    score : 0,


}

function update(){
    time++;
    if(i > 3){
        i = 0
    }

    if(time > 50 * 1){

        ball.angle = angles[i];
        i++;
        time = 0;

    }

    let distanceX = ball.x - mouseX;
    let distanceY = ball.y - mouseY;
    console.log("distanceX=" +distanceX);
    console.log("distanceY=" +distanceY);

    
    console.log(distanceX + " distancia do player x");
    console.log(distanceY + " distancia do player y");

    let sin = distanceY / (Math.sqrt((distanceX * distanceX) + (distanceY * distanceY)));
    let cos = distanceX / (Math.sqrt((distanceX * distanceX) + (distanceY * distanceY)));
    // console.log("sin=" +sin);
    // console.log("cos=" +cos);


    ball.velocityX = (ball.speed * cos) * -1//Math.cos(ball.angle * π/180);
    ball.velocityY = (ball.speed * sin) //Math.sin(ball.angle* π/180);

    ball.x += ball.velocityX; 
    ball.y -= ball.velocityY;


}

function render(){

    drawRect(0, 0, screenWidth, screenHeight, "black")
    drawRect(user.x, user.y, user.width, user.height, user.color);
    drawRect(com.x, com.y, com.width, com.height, com.color);
    drawCircle(ball.x, ball.y, ball.radius, ball.color);
    drawNet();
    drawText(screenWidth/4, screenHeight/5, user.score, 'white', 75);
    drawText(3 * screenWidth/4, screenHeight/5, com.score, 'white', 75);


}

function game(){
    update();
    render();

}

const framePerSecond = 50;

setInterval(game, 1000/framePerSecond)

function drawNet(){
    for(let i = 0; i <= screenHeight; i+=15){
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}


function drawRect(x, y, w, h, color){

    context.fillStyle = color;
    context.fillRect(x, y, w, h);


}

function drawCircle(x, y, r, color){

    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, r ,0 , 2*Math.PI, false);
     context.closePath();
    context.fill()

}

function drawText(x, y, text, color, fontSize){

    context.fillStyle  = color;
    context.font = fontSize + "px fantasy";
    context.fillText(text, x, y);


}


