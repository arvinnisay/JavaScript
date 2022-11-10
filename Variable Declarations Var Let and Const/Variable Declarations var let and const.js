"use strict"

// Assign Value using var keyword
var price1 = 5;
var price2 = 10;
var total = price1 + price2;

console.log("Sum of price1 and price2 = ", total);

// Updating variables declared with var

var price1 = 21;
var price2 = 14;
var total = price1 + price2;

console.log("Updated sum of price1 and price2 = ", total);

// Re-declaring the variables with var

var price1 = 500;
var price2 = 310;
var total = price1 + price2;

console.log("Sum of the re-declared price1 and price2 = ", total);

// Assign value using let Keyword

let dividend = 320;
let divisor = 20;

console.log("The division result: ", dividend/divisor);

//Update the value using let keyword

 dividend = 720;
 divisor = 30;

console.log("The updated division result: ", dividend/divisor);

/* let does not permit re-declaration.
once a variable has been declared with let,
it can be updated but not redeclared.*/

/* you can put on and off the let keyword */
/*
 dividend = 880;
 divisor = 40;

console.log("The division result after redeclaration: ", dividend/divisor);
*/
/* The const keyword represents constants 
Constants can only be defined once.
Updates and redefinitions are not permitted*/

const MY_BIRTHDAY = '12.11.1996';

console.log("My Birthday is on ", MY_BIRTHDAY);

/*// Updated 
const MY_BIRTHDAY = '10.04.1998';

console.log("My Updated Birthday is on ", MY_BIRTHDAY);*/