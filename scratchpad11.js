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
// Module pattern

var person1 ={
  "firstName": "Nagesh",
  "lastName": "MH",
  "getFirstName": function(){
    return this.firstName;
  },
  "getLastName": function(){
    return this.lastName;
  }
};

console.log("Name: " + person1.getFirstName() + " " + person1.getLastName()); // Prints 'Nagesh MH'
console.log("Name: " + person1.firstName + " " + person1.lastName); // Prints 'Nagesh MH'

console.log("--------------------------------------------------------------------------");
// Restricting access only to function variables of object
// Below example is working on closure property not on object properties

// funtion (){ function variables; create object; return object};
// All the properties accessible to outer world are defined in object
// Private members are defined as function variables.

function createPerson(){
  var firstName = "Nagesh";
  var lastName = "MH";
  
  var returnObject = {
    "getFirstName": function(){
      return firstName;
    },
      
    "getLastName": function(){
      return lastName;
    },
    
    "setFirstName": function(name){
      return firstName = name;
    },
      
    "setLastName": function(name){
      return lastName = name;
    }
  };
  
  return returnObject;
}

var person2 = createPerson();

console.log("Name: " + person2.getFirstName() + " " + person2.getLastName()); // Prints 'Nagesh MH'
console.log("Name: " + person2.firstName + " " + person2.lastName); // Prints 'undefined undefined'

// firstName and lastName are part of createPerson not the returnObject,
// So they can't be accessed directly using returnObject reference.

person2.setFirstName("NewFirstName");
person2.setLastName("NewLastName");

console.log("Name: " + person2.getFirstName() + " " + person2.getLastName()); // Prints 'NewFirstName NewLastName'
console.log("Name: " + person2.firstName + " " + person2.lastName); // Prints 'undefined undefined'

console.log("--------------------------------------------------------------------------");
// Closures in async callbacks

var i1;
var printI1 = function(){
  console.log("i: " + i1 );
};

for( i1 = 0 ; i1<10; i1++){ // Prints from 0 to 9
  //printI1();
}

console.log("With timeout");

for( i1 = 0 ; i1<10; i1++){ // This prints 10 10times as after 1000 milli seconds i value is 10
  //setTimeout( printI1, 1000); 
}

console.log("--------------------------------------------------------------------------");
// Solution1 to above problem

console.log("Solution 1");

var i2;
var printI2 = function (i){
  console.log("i: " + i);
};

for(i2 = 0; i2<10; i2++){
  //printI2(i2);
}

console.log("With timeout");

for(i2 = 0; i2<10; i2++){
  //setTimeout( printI2(i2), 1000); 
}

console.log("--------------------------------------------------------------------------");
// Solution2 to above problem

console.log("Solution 2");

var i3;
var printI3 = function(){
  console.log("i: " + i3 );
};

for( i3 = 0 ; i3<10; i3++){ // Prints from 0 to 9
  printI3();
}

console.log("With timeout");

for( i3 = 0 ; i3<10; i3++){ 
  
  (function(){
    
    var currentValueOfI = i3; // currentValueOfI is created for each function call. There by holds all the values of i.
    
    setTimeout( function(){
      console.log("i: " + currentValueOfI); 
    }, 1000);
    
  })(); 
  
  // or same as above but i value is passed as function argument
  
  (function(currentValueOfI){
     
    setTimeout( function(){
      console.log("i: " + currentValueOfI); 
    }, 2000);
    
  })(i3); 
}

console.log("--------------------------------------------------------------------------");