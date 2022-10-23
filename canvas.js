document.body.style.overflow = "hidden"; //hide scroll


//functions
function drawSquare(color, border, sizex, sizey, x, y, clear){
    
    if(clear == true){
    clearCanvas()
    context.strokeStyle = color;
    context.lineWidth = border;
    context.strokeRect(x,y,sizex,sizey)
    }
    else{
    context.strokeStyle = color;
    context.lineWidth = border;
    context.strokeRect(x,y,sizex,sizey)
    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function clearCanvas(){
    context.fillStyle = "white";
    context.clearRect(0, 0, screenw, screenh);
}
function notClear(){
    drawSquare("lime",50,250,50,xstart,platy);
    drawLine(0,0,200,200)
}
function drawLine(intialX, initialY, finalX, finalY ){
    context.beginPath();
    context.moveTo(intialX, initialY);
    context.lineTo(finalX, finalY);
    context.stroke();
}




 //canvas spawn

const canvas = document.getElementById('screenCanvas');
const context = canvas.getContext("2d");
let screenw = window.innerWidth
let screenh = window.innerHeight
    

 canvas.height = screenh;
 canvas.width = screenw;
    

 //first spawn   
   
var playerx = getRandomInt(1, screenw); 
var playery = getRandomInt(1, screenh);

var platy = screenh/1.5;
let xstart = playerx;

let lol = 1 //(used for infinte while)


drawSquare("black",5,50,50,playerx,playery,false);
drawSquare("lime",50,250,50,xstart,platy,false);





//movement

document.addEventListener('keydown', (event) => {
     
    switch (event.keyCode) {
        case 37:
            playerx = playerx - 30
            drawSquare("black",5,50,50,playerx,playery,true);
            notClear();
            break;
        case 38:
            playery = playery - 30
            drawSquare("black",5,50,50,playerx,playery,true)
            notClear();
            break;
        case 39:
            playerx = playerx + 30
            drawSquare("black",5,50,50,playerx,playery,true)
            notClear();
            break;
        case 40:
            playery = playery + 30
            drawSquare("black",5,50,50,playerx,playery,true)
            notClear();
            break;
        case 90:
            
            break;
        }
    }, false);
    











