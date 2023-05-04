const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");

const screenWidth = 600;
const screenHeight = 400;

context.fillStyle = "black";
context.fillRect(0, 0, screenWidth, screenHeight);

render();


function render(){

    drawRect(0, 0, screenWidth, screenHeight, "black")
    drawText(50,90, 'score: ', 'white', 33)


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


