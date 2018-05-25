//Game Logic
const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

//Create the unit
const box = 32;

//Load Images
const ground = new Image();
ground.src = "img/ground.png"

const foodImg = new Image();
foodImg.src = "img/foodImg";

//Create the sanke

let snake = [];

snake[0] = {
  x : 9 * box,
  y : 10 * box
}

//Create the foodImg

let food = {
  x: Math.floor(Math.random()*17+1) * box,
  y: Math.floor(Math.random()*15+3) * box
}

//Create the score

let score = 0;


//Draw everything to the canvas

function draw(){
  ctx.drawImage(ground,0,0);

}

//Call draw function every 100ms
let game = setInterval(draw,100);
