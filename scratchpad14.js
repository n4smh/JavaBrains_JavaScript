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
// Prototype
// Refer to the image Prototype.png

// Prototype is a implicit object created and appended to function of which on object is created.
// When new object is created from that function __proto__ object is created implicitly and appended to object created
// __proto__ object will be point to prototype object of the function from which it is created.
// __proto__ is also called dunder-proto

function Person(firstName, lastName, gender){
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = gender;
}

Person.prototype.name = function(){
   return this.firstName + " " + this.lastName;
};
Person.prototype.office = "THBS";
Person.prototype.firstName = "Default firstName";
Person.prototype.lastName = "Default lastName";
Person.prototype.gender = "Default gender";

var person1 = new Person('Nagesh' , 'MH', 'M');
console.log(person1);

// First checks for name function and office property in person object 
// If not found checks for same in prototype/__proto__ object and fetched the required items from there
console.log(person1.name()); 
console.log(person1.office);

delete person1.gender;
console.log(person1); // 'gender' is deleted from person1
console.log(person1.gender); // Fetches value for 'gender' from the prototype object

var person2 = new Person('Karthik' , 'Devaru', 'M');
console.log(person2);

// Following code is similar to that of person1 invocation 
console.log(person2.__proto__.name.call(person2)); // Added call() to change the scope from __proto__ object scope to person2
console.log(person2.__proto__.office);

console.log("--------------------------------------------------------------------------");
// Dunder proto --> __proto__

console.log(person1.__proto__.constructor);

// Dunder proto contains constructor objects
// It holds the refrence to the function which created the object 

// New object can be created using this constructor object
// But not recomended

person3 = new person1.__proto__.constructor("Sandeep","Vijaykumar","M");
console.log(person3);

console.log("--------------------------------------------------------------------------");
