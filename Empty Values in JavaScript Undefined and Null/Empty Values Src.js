"use strict"
// Variable hoisting 

// When using var, a variable can be used before iniatilization
// This known as Variable Hoisting

a = 5;
console.log("The value of a = ", a);
var a;

// With let and const, variable hoisting is not possible
/*
b = 5;
console.log("The value of b = ", b);
let b;
*/
/*
c = 5;
console.log("The value of c = ", c);
const c;
*/
  
var uninitialized_var;
console.log("uninitialized_var = ", uninitialized_var);

let uninitialized_let
console.log("uninititalized_let = ", uninitialized_let);

var undefined_var;
console.log("undefined_var = ", undefined_var);

let undefined_let;
console.log("undefined_let = ", undefined_let);

var x = null;
console.log("Value of x = ", x);


// traverse from left to right while performing mathematical operations
var x = "5" + 2 + 3;
console.log("x = ", x);

var x = 2 + 3 + "7";
console.log("Redefine x = ", x);

let y = "5" +2 +3 ;
console.log("y = ", y);

let z = 2 + 3 + "5";
console.log("z = ", z);













































































































































































































































































