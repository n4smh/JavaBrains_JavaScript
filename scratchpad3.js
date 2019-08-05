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
// Array is a JS object implementation with aditional function, so all the object concepts are valid here.

var arr1 = [100,200,300];
console.log(arr1);
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);

// Its just a key value pair as seen in objects
console.log(arr1["0"]);

console.log("--------------------------------------------------------------------------");

// Adding new value to array
arr1[3] = 400;
console.log(arr1);

// If the value already exist at that position it will be replaced new value
arr1[2] = 500;
console.log(arr1);

// Any index is valid
arr1[9] = 900;
console.log(arr1);

console.log("--------------------------------------------------------------------------");

// Length of array
// Length just displays the highest index + 1 as array length
console.log(arr1.length);

console.log("--------------------------------------------------------------------------");

// Can have string index but the length remains same
arr1["foo"] = "foo";
console.log(arr1);
console.log(arr1.length);

console.log("--------------------------------------------------------------------------");
// Array functions
// push & pop --> front/top
// unshift & shift --> back/bottom

var arr2 = [10,20,30];

var result = arr2.push(40);
console.log(arr2 +" : "+result); // returns length of array

result = arr2.pop();
console.log(arr2 +" : "+result); // returns item removed from last of array

result = arr2.unshift(40);
console.log(arr2 +" : "+result); // returns length of array

result = arr2.shift();
console.log(arr2 +" : "+result); // retruns item removed from front of array

console.log("--------------------------------------------------------------------------");
// For each function

arr2.forEach(function(item,index,array){
  console.log("forEach element in arr2: " + item + ", index: " + index);
  console.log(array);
});

console.log("--------------------------------------------------------------------------");
// Wrapper objects ( String, Boolean, Number, Symbol )

var greeting = "Hello N4SMH";

console.log(greeting); // greeting is premitive string type
console.log(typeof greeting); // type is string
console.log(greeting.length); // This call creats respective wrapper objects which provides access to native method's and properties of tha wrapper object.

console.log("--------------------------------------------------------------------------");
