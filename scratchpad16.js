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
// Inheritance

function Employee(name){
  this.name = name;
}

Employee.prototype.getName = function (){
  return this.name;
};

var emp1 = new Employee('Nagesh');
console.log(emp1.getName());

function Manager(name,dept){
  this.name = name;
  this.dept = dept;
};

Manager.prototype.getDept = function (){
  return this.dept;
};

var manage1 = new Manager('Devaru', 'Development');
console.log(manage1.getDept());
//console.log(manage1.getName()); // results in error

// Refer Inheritance image
Manager.prototype.__proto__ = Employee.prototype;
console.log(manage1.getName()); 

console.log("--------------------------------------------------------------------------");