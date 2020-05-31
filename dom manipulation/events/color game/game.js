var numberOfSquares = 6;
var colors = [];
var pickedColor;

var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	// mode buttons event listeners
	for(var i = 0; i< modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
			reset();
		});
	}

	for(var i = 0; i< squares.length; i++){
	//adding event listener
	squares[i].addEventListener("click", function(){
		// grab the clicked color
		var clickedColor = this.style.backgroundColor;
		//compare clicked color and picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again ?";
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}
reset();
}


function reset(){
	colors = generateRandomColors(numberOfSquares);
	//pick a random color from array
	pickedColor = pickColor();
	// change color display to match new picked color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	//change colors of squares
	for(var i=0; i< squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}



resetButton.addEventListener("click", function(){
	reset();
});



function changeColors(color){
	for(var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	//get random colors and push into arr
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	//pick "red" = 0-255
	var r = Math.floor(Math.random() * 256);
	//pick "green" = 0-255
	var g = Math.floor(Math.random() * 256);
	//pick "blue" = 0-255
	var b = Math.floor(Math.random() * 256);
	//rgb(0-255, 0-255, 0-255)
	return "rgb("+ r + ", " + g + ", " + b + ")";
}