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
// The Object function

// Object function is a function property in global variable
// When objects are created with out specific function, it will use Object function in global variable to create new object

// Refer The Object function 1 image

var simple = {}; // Short hand notation to create object
var obj = new Object(); // Expanded notation to create object

console.log(simple.__proto__.constructor);
console.log(obj.__proto__.constructor);

console.log(simple.__proto__.constructor === obj.__proto__.constructor);


console.log("--------------------------------------------------------------------------");
// Refer The Object function 2 image

var scopeDemo = function (){};

scopeDemo.prop1 = "Property in scopeDemo object (man)";
console.log(scopeDemo.prop1);

scopeDemo.__proto__.prop2 = "Property in dunder proto (parent)";
console.log(scopeDemo.prop2);

console.log(scopeDemo.__proto__.__proto__ === Object.prototype);
Object.prototype.prop3 = "Property in Object function (grand parent)";

console.log(scopeDemo.prop3);

console.log("--------------------------------------------------------------------------");