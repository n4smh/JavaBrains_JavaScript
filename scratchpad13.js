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
// Function execution types
// 'this' object reference in diffrent method call context

function demoFunction1(){
  console.log("Demo function1");
  
  // 'this' object points to global object
  console.log(this);
}

var demoObj = {
  "prop":"demo object property",
  "demoFunction2": function(){
    console.log("Demo function2");
    
    // 'this' object refers to demoObj itself
    console.log(this);
  }
};

function DemoFunction3(){
  console.log("Demo function3");
  
  // 'this' object refers to Constructor itself
  console.log(this);
}

// Method #1; Function call
demoFunction1(); 

// Method #2; Object reference to its properties
demoObj.demoFunction2(); 

// Method#3; Constructor call
new DemoFunction3(); 

console.log("--------------------------------------------------------------------------");
// Method #4
// call(<reference object>)

function Bicycle(cadence, speed, gear, tirePressure){
  this.cadence = cadence;
  this.speed = speed;
  this.gear = gear;
  this.tirePressure = tirePressure;
  
  this.inflateTires = function(){
    this.tirePressure += 3; 
  };
}

var bicycle1 = new Bicycle(50,20,4,25);
bicycle1.inflateTires();

console.log(bicycle1);

function Mechanic(name){
  this.name = name;
}

var mike = new Mechanic("Mike");
mike.inflateTires = bicycle1.inflateTires; 

mike.inflateTires(); // it will not affect the property in bicycle1 as 'this' operator is pointing to mike object
console.log(bicycle1);
console.log(mike); // tirePressure property is created is mike by 'this' operator in inflateTires function call

mike.inflateTires.call(bicycle1); // 'this' operator will point to argument passed for call method
console.log(bicycle1); // tirePressure is increased by 3


console.log("--------------------------------------------------------------------------");