var todos = [];

window.setTimeout(function(){
	var input = prompt("What would you like to do?");
	while(input !== "quit"){
		if(input === "new"){
			createTodo()
			;}else if( input === "list"){
				listTodo();

			}else if(input === 'delete'){
				deleteTodo();
			}
			input = prompt("What would you like to do?");
		}
		console.log("OK, YOU HAVE QUIT THE APP");
	}, 500);


function listTodo(){
	//show the todos
	console.log("***************");
	todos.forEach(function(item, index){
		console.log(index + ": " + item);
	});
	console.log("***************");
}

function deleteTodo(){
	var index = prompt("Enter the index of todo");
	var delTodo = todos.splice(index,1); 
	console.log('Removed todo : ' + delTodo);
}

function createTodo(){
	// ask a new todo to enter from user
	var newTodo = prompt("Enter a new todo");
	// push it to the todos array
	todos.push(newTodo);
	console.log('Added todo : ' + newTodo);
}