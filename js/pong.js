const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");

const screenWidth = 600;
const screenHeight = 400;

context.fillStyle = "black";
context.fillRect(0, 0, screenWidth, screenHeight);

let rectX = 0;

//classes

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

    speed : 5,

    velocityX : 5,
    velocityY: 5,

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


