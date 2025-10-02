let jumpingGIF;

function preload() 
{
	jumpingGIF = loadImage('/IMG_2347.gif');
}

function setup() 
{
	createCanvas(400, 400);
}

function draw()
{
	background(220, 200, 250);
	
	if (mouseIsPressed == true){

		image(jumpingGIF, 140, 120, 100, 200);
		
	}
	
}
