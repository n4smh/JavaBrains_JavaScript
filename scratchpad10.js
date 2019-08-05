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
// Closures - Function which remembers its scope

var a1 = 10;

function outer1(){
  var b1 = 20;
  
  var inner = function() {
    a1++;
    b1++;
    
    console.log("a: " + a1);
    console.log("b: " + b1);
  }
  
  return inner;
}

var innerFn1 = outer1();
innerFn1(); // b1 is accesed out side the outer1 funciton 
// innerFn holds the snapshot of scope tree, where ever it is used it will modifiy the actual values. (Not the copy of it)

var innerFn2 = outer1(); // For each call to outer1 new b1 and inner is created
innerFn2();

// a will be 11 and 12 where as b will be 21 in both the case as b is created for every execution of outer.

console.log("--------------------------------------------------------------------------");
// Closures in callback

var a2 = 10;

var fn = function (){
  console.log("a: " + a2);
};

setTimeout(fn,2000); // (function to be executed, Milli seconds to be waited)


console.log("done"); // This will be printed before a is printed

console.log("--------------------------------------------------------------------------");
