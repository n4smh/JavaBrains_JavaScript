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

var person1 = {
  "firstname":"Firstname",
  "lastname:":"Lastname",
  "getFullName": function () {
    return this.firstname + " " + this.lastname;
  },
  "address":{
    "city":"Banglore",
    "state":"Karnataka",
    "country":"India"
  },
  "isFromState": function (stateName){
    /*if(this.address.state === stateName){
      return true;
    }else{
      return false;
    }*/
    return this.address.state === stateName;
  }
};

console.log(person1.isFromState("Karnataka"));
console.log(person1.isFromState("Andra"));

console.log("--------------------------------------------------------------------------");
