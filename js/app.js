// Get canvas element
let canvas = document.getElementById("myCanvas");
// Drawing object
let ctx = canvas.getContext("2d");

let h = canvas.height;
let w = canvas.width;

let height = h/3;

let move = function(e) {
	document.getElementById("keyPressed").innerText = e.code;
	if(e.code == 'KeyS') {
		if(height+5 < h - 100) {
			height+=5
		}
		else {
			height = h - 100
		}
	}
	else if(e.code == 'KeyW') {
		if(height-5 > 0) {
			height-=5
		}
		else {
			height = 0
		}
	}
}

function drawPaddles(pheight) {
	padHeight = 100;
	padWidth = 10;
	ctx.fillStyle = "white";
	// ctx.fillRect(0,h/3,padWidth,padHeight);
	ctx.fillRect(0,pheight,padWidth,padHeight);
	ctx.fillRect(w - 10,h/3,padWidth,padHeight);
}

function drawBall() {
	ctx.fillStyle = "white";
	ctx.arc(w/2,h/2,5,0,2*Math.PI);
	ctx.fill();
}

function game() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	drawBall()
	drawPaddles(height);
}

document.addEventListener('keypress', move);

setInterval(game, 16);