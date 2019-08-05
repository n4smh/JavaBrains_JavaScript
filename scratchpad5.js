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
// Flexible arguments
// Implicit/Default arguments are 'arguments' & 'this'

var add1 = function(a,b){
  console.log(arguments);
  return a+b;
}

add1();
add1(10,20);
add1(10,20,30);

console.log("--------------------------------------------------------------------------");
// arguments value is object, not an array

var add2 = function(){
  console.log(arguments);
  
  var sum = 0;
  
  for(i=0;i<arguments.length;i++){
    sum = sum + arguments[i];
  }
  
  return sum;
}

console.log(add2(10,20,30));

console.log("--------------------------------------------------------------------------");