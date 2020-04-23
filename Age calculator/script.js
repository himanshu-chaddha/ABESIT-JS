var age = prompt("How old are you?");
console.log("Your age is ", age);

var days = age * 365.25;

console.log("Your age in days is ", days);

document.write("<div class='age'><p>You are " + age +" years old.</p></div>");
document.write("<div> <p>You've been alive for "+ days +" days</p></div>")
