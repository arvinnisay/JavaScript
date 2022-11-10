"use strict"

alert("Hello This is an alert message");

 let name = prompt("The Prompt message is: \nPlease enter your name:"); // No default value
console.log("You have entered " + name);

let subject = prompt("Please enter your selected subject name", "JavaScript") // Has default Value
console.log("Your Selected Subject is " + subject);

let a = prompt("Enter a Number to get its square value");
let b = a * a;
alert("Square Value is " + a + " is : " + b);

let output = confirm("Confirmation Message: \nAre you Ready to move to the next demo?");

if(output) {
	console.log("You Pressed Ok");
}
else {
	console.log("You Pressed Cancel");
}