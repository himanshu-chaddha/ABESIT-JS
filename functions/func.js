/* function isEven() than return true if even number
is passed as an argument else return false.
*/

// function isEven(num){
// 	if(num % 2 === 0){
// 		return true;
// 	}else{
// 		return false;
// 	}
// }

// function isEven(num){
// 	return num %2 === 0;
// }

/* function to calculate factorial of a given argument*/

// function factorial(num){
// 	var result = 1;
// 	for(var i = 2; i<=num; i++)
// 		result *= i;
// 	return result;
// }

// function factorial(num){
// 	if(num === 0){
// 		return 1;
// 	}
// 	var result = num;
// 	for(var i = num-1; i>=1; i--)
// 		result *= i;

// 	return result;
// }

/* function to convert kabab-cased string to snake_cased string*/

function kebabToSnake(str){
	return str.replace(/-/g,"_");
}

