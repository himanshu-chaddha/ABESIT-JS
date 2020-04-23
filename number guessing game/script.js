var secretNumber = 17;

var guessNumber = Number(prompt("Guess any number?"));

console.log("guessNumber", guessNumber);

if(guessNumber === secretNumber){
	alert("YOU GOT IT RIGHT!!");
}else if(guessNumber > secretNumber){
	alert("Too High, Please Try Again!");
}else{
	alert("Too Low, Please Try Again");
}