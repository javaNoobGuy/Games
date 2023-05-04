const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");

const screenWidth = 600;
const screenHeight = 400;

context.fillStyle = "black";
context.fillRect(0, 0, screenWidth, screenHeight);

id = setInterval(frame, 20);
let porcentagem  = 0;
drawRect(0,0, 22,22, 'blue')
drawRect(50,80, 56,90, 'cyan')
function frame(){
    
    if(porcentagem >= 1){
        clearInterval();
        
    }else{

        
        context.fillStyle = colorTween((porcentagem * 100));;
        context.beginPath();
        context.arc(300,350,50,0, (2*Math.PI) * porcentagem, false);
         context.closePath();
        context.fill()
        porcentagem += 0.01;
        console.log(porcentagem)
    }


}

function render(){

    drawRect(0, 0, screenWidth, screenHeight, "black")


}

function colorTween(p) {
    var r1 = 0xff;
    var g1 = 0xff;
    var b1 = 0xff;
    var r2 = 0x99;
    var g2 = 0x90;
    var b2 = 0xff;
    var r3 = (256+(r2-r1)*p/100+r1).toString(16);
    var g3 = (256+(g2-g1)*p/100+g1).toString(16);
    var b3 = (256+(b2-b1)*p/100+b1).toString(16);
    return '#'+r3.substring(1,3)+g3.substring(1,3)+b3.substring(1,3);
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

function drawText(x, y, text, color){

    context.fillStyle  = color;
    context.font = "75px fantasy";
    context.fillText(text, x, y);


}


