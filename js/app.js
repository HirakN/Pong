// Get canvas element
var canvas = document.getElementById("myCanvas");
// Drawing object
var ctx = canvas.getContext("2d");

createPaddles()

createBall();

function createPaddles() {
	h = canvas.height;
	w = canvas.width;
	padHeight = 100;
	padWidth = 10;

	ctx.fillStyle = "white";
	ctx.fillRect(0,h/3,padWidth,padHeight);
	ctx.fillRect(w - 10,h/3,padWidth,padHeight);
}

function createBall() {
	ctx.fillStyle = "white";
	ctx.arc(250,150,5,0,2*Math.PI);
	ctx.fill();
}

function game() {
	
}

setInterval(game(), 3000);