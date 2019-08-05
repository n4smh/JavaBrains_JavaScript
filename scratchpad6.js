/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

console.clear();
console.log("--------------------------------------------------------------------------");
// Scopes and closures

var name1="Nagesh";

if(name1="Nagesh"){
  var department1="Engineering";
}

console.log(name1);
console.log(department1); // Prints 'Engineering' because JS is not based on block scope ('{}')


console.log("--------------------------------------------------------------------------");
// Function scoped

var name2="Nagesh";

function allocateDepartment(){
  if(name2="Nagesh"){
    var department2="Engineering";
    return department2;
  }
}

console.log(name2);
console.log(allocateDepartment());
// console.log(department2); // Throws error, as JS is function scoped (Runtiem error)

console.log("--------------------------------------------------------------------------");
// Local scoped variables over takes over the global scoped variables

var top1 = 10;
var inner1 = 50; // Global scope

function foo1(){
  var inner1 = 20; // Local scope
  console.log(inner1);
}

foo1(); // Prints 20
console.log(inner1); // Prints 50

console.log("--------------------------------------------------------------------------");

var name3 = "Nagesh";

function printGreeting1(name3){ // Local scope 'name'
  console.log("Hello " + name3);
}

printGreeting1("N4SMH");

console.log("--------------------------------------------------------------------------");
// Global scope are not much entertained in JS 
// As the variables are accessable even in other scripts running in same name space of the page
// Resulting in usage of unintented values or polluting global name space

// Scenario: Some page has 2 JS library 

function myFun(){
  var a = 10;
  var b = 20;

  console.log(a+ " + " +b+ " = " + (a+b));
}
myFun(); // But still 'myFun' is a Global scope, conflict may arrise even for function name

console.log("--------------------------------------------------------------------------");
// Anonymous function IIFE (Immediately Invoked Function Expression)
// This will not pollute the global name space

// (anonymous function(){})();

(function (){
  var a = 10;
  var b = 20;

  console.log(a+ " + " +b+ " = " +(a+b));
  
})(); // Executes the function block immediately and lost

// console.log(a); // This will not pollute the global name space

console.log("--------------------------------------------------------------------------");