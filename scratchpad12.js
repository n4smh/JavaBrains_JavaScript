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
// Employment management system

function createEmployeeObject1(firstname,lastname,gender,designation){ // Works in similar way as constructor
  var newEmployeeObject = {};
  
  newEmployeeObject.firstName = firstname;
  newEmployeeObject.lastName = lastname;
  newEmployeeObject.gender = gender;
  newEmployeeObject.designation = designation;
  
  return newEmployeeObject;
}

var emp1 = createEmployeeObject1('Nagesh', 'Holur', 'Male', 'D1');
var emp2 = createEmployeeObject1('Karthik', 'Devaru', 'Male', 'D1');
var emp3 = createEmployeeObject1('Sandeep', 'Vijaykumar', 'Male', 'D2');

console.log(emp1);
console.log(emp2);
console.log(emp3);

console.log("--------------------------------------------------------------------------");
// Constructor

// Constructor mode in JS is way in which function is called (using new keyword)
// Function by itself does'nt provide an property to indicate it is a constructor

// In order to notify that its a constructor, nomenclature (nameing convenction) followed is 
// capitalizing the first letter of the function name

function CreateEmployeeObject2(firstname,lastname,gender,designation){ // Constructor. Its still a function not a class
  // var newEmployeeObject = {};
  // var this = {};
  
  this.firstName = firstname;
  this.lastName = lastname;
  this.gender = gender;
  this.designation = designation;
  
  // return newEmployeeObject;
  // return this;
}

var emp4 = new CreateEmployeeObject2('Nagesh', 'Holur', 'Male', 'D1');
var emp5 = new CreateEmployeeObject2('Karthik', 'Devaru', 'Male', 'D1');
var emp6 = new CreateEmployeeObject2('Sandeep', 'Vijaykumar', 'Male', 'D2');

console.log(emp4);
console.log(emp5);
console.log(emp6);

console.log("--------------------------------------------------------------------------");

var emp7 = new createEmployeeObject1('Nagesh', 'Holur', 'Male', 'D1'); // this works fine 

// Throws execption

// console.log(firstName);
// console.log(lastName);
// console.log(gender);
// console.log(designation);

var emp8 = CreateEmployeeObject2('Karthik', 'Devaru', 'Male', 'D1'); // this results in undefined object
// But above line creates the function properties as variable in global scope, as 'this' was pointing to global scope

console.log(emp7); 
console.log(emp8);

console.log(firstName);
console.log(lastName);
console.log(gender);
console.log(designation);

console.log("--------------------------------------------------------------------------");
