/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

// "use strict";

console.clear();
console.log("--------------------------------------------------------------------------");
// Strict mode

var myName1 = "Nagesh";

myname1 = "N4SMH";

console.log("myName1: " + myName1); 
console.log("myname1: " + myname1); // Throws error in strict mode


console.log("--------------------------------------------------------------------------");
// Strict mode for functions 

demoFunction();

function demoFunction(){
  //"use strict"; // Strict mode is applied only to this function 
  
  var myName2 = "Nagesh";
  myname2 = "N4SMH";
  
  console.log("myName2: " + myName2); 
  console.log("myname2: " + myname2); // Throws error in strict mode
  
}

console.log("--------------------------------------------------------------------------");
