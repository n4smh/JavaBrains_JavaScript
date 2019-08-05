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
// Compilation and Interpretaion

// Compilation just declares the variables in there respective scopes
// More or less like a book keeping or accounting step
// Where the variables are declared? how are they declared?
// Scope chain is created

var a=10;

function myFun(){
  var b=20;
  var c=30;
  console.log(a+b);
  d=40;
}

myFun();

// In the above example 5 varible is created
// Global:  a
//          myFun: b
//                 c
//          d

// 'd' is created as a global scope variable not as the function scope variable
// 'd' is created during interpretaion

console.log("--------------------------------------------------------------------------");

var myName="Nagesh";

function greet(name){
  console.log(name);
}

greet(myName);

// Compilation 
// In the above example 3 varible is created
// Global:  myName
//          greet:  name


// Interpretation
// Goes line by line

// line 1: checks is there 'myName' with global scope in scope chain, if present assign it with the hard coded value 'Nagesh'
// line 4: checks for 'greet' & 'myName' in global scope once found call is made to function with argument.
// line 2: checks for 'name' in 'greet' function scope and assigns argument passed 'myName' to 'name'.
// line 3: checks for 'console' in 'greet' function scope, its not found. It goes a level up and checks in global scope. Its found and uses it.

// 'console' is the implicit variable of global scope.

console.log("--------------------------------------------------------------------------");
// Example1 for scope tree 

var a1 = 10;
console.log("a: " + a1);

function outer1(){
  var b1 = a1;
  console.log("b: " + b1);
  
  function inner1(){
    var b1 = 20;
    var c1 = b1;
    console.log("c: " +c1);
  }
  inner1();
}
outer1();

// Scope tree
// Global:  a
//          outer:  b
//                  inner:  b
//                          c

console.log("--------------------------------------------------------------------------");
// Example2 for scope tree 

var a2 = 10;
console.log("a: " + a2);

function outer2(){
  var b2 = a2;
  console.log("b: " + b2);
  
  function inner2(){
    
    var c2 = b2;
    console.log("c: " +c2); // Prints undefined
    var b2 = 20;
  }
  inner2();
}
outer2();

// Scope tree
// Global:  a
//          outer:  b
//                  inner:  c
//                          b

console.log("--------------------------------------------------------------------------");
// Hoisting Start 

hoistingDemoFunction1(); // This works fine even the function defination comes after the function call
// As namespace and scope tree is created in compilation itself before the execution in the interpretation 

function hoistingDemoFunction1(){
  console.log("Inside hoistingDemoFunction1");  
}

console.log("--------------------------------------------------------------------------");
// No rules like which function needs to be declared first.
// As the scope tree is created during the compilation 

// hoistingDemoFunction2(); // Recursive functions call

function hoistingDemoFunction2(){
  console.log("Inside hoistingDemoFunction2");
  hoistingDemoFunction3();
  
}

function hoistingDemoFunction3(){
  console.log("Inside hoistingDemoFunction3");
  hoistingDemoFunction2();
}


console.log("--------------------------------------------------------------------------");

// hoistingDemoFunction4(); // Recursive function call

function hoistingDemoFunction4(){ // Function declaration 
  console.log("Inside hoistingDemoFunction4");
  hoistingDemoFunction4();
}

console.log("--------------------------------------------------------------------------");

hoistingDemoFunction5(); // This results in error
// Expressions are evaluated and assigned value during interpretation 

var hoistingDemoFunction5 = function(){ // Function expression
  console.log("Inside hoistingDemoFunction5");
}

console.log("--------------------------------------------------------------------------");