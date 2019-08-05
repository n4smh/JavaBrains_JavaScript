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
// Functions
// Function declration

function sayHello1(){
  console.log("Hello World");
}

sayHello1();

console.log("--------------------------------------------------------------------------");
// Function overloging is not supported

function sayHello2(name){
  console.log("Hello " + name);
}

sayHello2("N4SMH");
sayHello2(); // Doesn't results in error, its still a valid call
sayHello2("N4SMH","Nagesh"); // Doesn't results in error, its still a valid call, ignores the extra arguments

console.log("--------------------------------------------------------------------------");
// Function with return value

function sayHello3(name){
  return "Hello " + name;
}

var result = sayHello3("N4SMH");
console.log(result);

result = sayHello3();
console.log(result);

console.log("--------------------------------------------------------------------------");
// Function with just return, will return undefined

function sayHello4(){
  return;
}

var result = sayHello4();
console.log(result);

console.log("--------------------------------------------------------------------------");
// Function expressions

var f1 = function sayHello5(){
  console.log("Hello f1");
}; // It good to have ; at end of function expression

f1();
// sayHello5(); // Results in error

console.log("--------------------------------------------------------------------------");
// Anonymous function expression

var f2 = function (){
  console.log("Hello f2");
};

f2();

console.log("--------------------------------------------------------------------------");
// Function as arguments

var executor = function(functionName){
  functionName();
};

executor(f1);

console.log("--------------------------------------------------------------------------");
// Functions as object property

var obj1 = {
  "prop1": "obj1 prop1",
  "func1": function (){
    console.log("func1 of obj1");
  }
};

obj1.func1();

console.log("--------------------------------------------------------------------------");
// Function with in obj using same obj property

var person = {
  "firstname": "FirstName",
  "lastname": "LastName",
  "getFullname": function (){
    return "Full name is: " + person.firstname + " " + person.lastname;
  }
};

var result = person.getFullname();
console.log(result);

// Potential problem
// Fragile code

var person2 = person;
person={};

result = person2.getFullname();
console.log(result);

console.log("--------------------------------------------------------------------------");

// Solution use 'this' operator to reference insted of the actual object itself
var person3 = {
  "firstname": "FirstName",
  "lastname": "LastName",
  "getFullname": function (){
    return "Full name is: " + this.firstname + " " + this.lastname;
  }
}

result = person3.getFullname();
console.log(result);

var person4 = person3;
person3={};

result = person4.getFullname();
console.log(result);

console.log("--------------------------------------------------------------------------");



console.log("--------------------------------------------------------------------------");
