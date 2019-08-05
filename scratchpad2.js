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

var myObj1 = {};
myObj1.prop1 = "Hello";
myObj1.prop2 = 123;
myObj1.prop3 = true;
console.log(myObj1);

console.log("--------------------------------------------------------------------------");

// Defining objets inline

var myObj2 = {
  "prop1":"Hello",
  "prop2":123,
  "prop3":true
};
console.log(myObj2);
console.log("--------------------------------------------------------------------------");

// Unassigned value results in undefined type, does'nt throw error
console.log(myObj1.prop4);

console.log("--------------------------------------------------------------------------");

// [] is used insted of dot for accessing object where property to be fetched is not known prior
a = "prop2";
console.log(myObj1[a]);

console.log("--------------------------------------------------------------------------");

// Combination of all of these can be used
myObj2.prop4 = null;
console.log(myObj2);

console.log("--------------------------------------------------------------------------");

// Nested objects
var myObj3 = {
  "prop1":"Hello",
  "prop2":123,
  "prop3":true,
  "propObj":{
    "propObjProp1":"Inner Object"
  }
};
console.log(myObj3);

// All above mentioned object concepts holds good even for nested objects
console.log(myObj3["propObj"].propObjProp1);

console.log("--------------------------------------------------------------------------");

// Objects are equal if they point to same object in memory
var myObj4 = myObj3;

console.log(myObj3);
console.log(myObj4);

console.log(myObj3===myObj4);

console.log("--------------------------------------------------------------------------");
// Undefined vs null 
var myObj5 = {
  "firstname":"N4SMH",
  "middlename":null,
  "lastname":"Holur"
};
console.log(myObj5.middlename); // null
console.log(myObj5.age); // undefined


console.log("--------------------------------------------------------------------------");

// Removing property from object

myObj5 = {
  "firstname":"N4SMH",
  "middlename":null,
  "lastname":"Holur",
  "age":undefined
};

console.log(myObj.age);
console.log(myObj5); // But it still appers in object structure

delete myObj5.age; // Removes completly from object structure
console.log(myObj.age);
console.log(myObj5);

console.log("--------------------------------------------------------------------------");