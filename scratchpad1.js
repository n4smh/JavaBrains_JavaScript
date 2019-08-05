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

//console.log("Hello World!");
var a=10;
var b =20;
var c = a+b;
var d= "Hello";
var e = true;

console.log(a +":"+ typeof a);
console.log(b);
console.log(c);
console.log(d +":"+ typeof d);
console.log(e +":"+ typeof e);

a ="Hello world!";
console.log(a);

console.log("--------------------------------------------------------------------------");

var f; //Undefined: Declared but not defined
console.log(f +":"+ typeof f);

var g = null; 
console.log(g +":"+ typeof g);

/*
 * null and undefined are the absence of value
 *
 * Undefined is a variable not defined 
 * Null is assigning external specification of absence of value
 * 
 * typeof null is objet not null (It's a bug in javascript)
 *
 */

console.log("--------------------------------------------------------------------------");

// Type Coersion and ===

a = 10;
b = 10;
c = "10";

if(a==b && a==c){
  // Type Coersion javascript (==)
  console.log("Values are equal");
}else{
  console.log("Values are not equal");
}

if(a===b && a===c){
  // Will not do type conversion while comparing (===)
  console.log("Values are equal");
}else{
  console.log("Values are not equal");
}

console.log("--------------------------------------------------------------------------");

// if conditions

a=10;
console.log(a);
if(a){
  console.log("a is true");
}else{
  console.log("a is false")
}

a=0;
console.log(a);
if(a){
  console.log("a is true");
}else{
  console.log("a is false")
}

a=-10;
console.log(a);
if(a){
  console.log("a is true");
}else{
  console.log("a is false")
}

a="";
console.log(a);
if(a){
  console.log("a is true");
}else{
  console.log("a is false")
}

a="a";
console.log(a);
if(a){
  console.log("a is true");
}else{
  console.log("a is false")
}

var x;
console.log(x);
if(x){
  console.log("x is true");
}else{
  console.log("x is false")
}

x = null;
console.log(x);
if(x){
  console.log("x is true");
}else{
  console.log("x is false")
}

console.log("--------------------------------------------------------------------------");

