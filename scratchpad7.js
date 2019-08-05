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
// Read & Write operations
// RHS to LHS

var a = 10; // Writing 'a'
console.log(a); // Read 'a'

var b = a; // Reading from 'a' and writing to 'b'
console.log(b); // Reading 'a'

function greet(name){ // Writing to 'name'
  console.log("Hey " + name); // Reading 'name'
}

greet("N4SMH");

console.log("--------------------------------------------------------------------------");
// Implication of Read and Write
// Write operation without delcaration works fine but not read operation
// Write followed by read works, as write declares the variable

var foo1;
console.log(foo1);
// console.log(foo2); // Throws execption

foo3 = 10; // Write // Created in global scope
console.log(foo3); // Prints 10 // Read

console.log("--------------------------------------------------------------------------");
// Global objects
// It's name depends on JS run environment 
// For browser 'window' is the global object 
// Each global variable is a property of global object

console.log(window);
console.log(window.a); // Global variable 'a' is created as property of Global object 'window'

console.log("--------------------------------------------------------------------------");