'use strict';
//create an object and assign it to a variable named "partnerObj"
//inside partnerObj make 5 key/value pairs one of wich must be a method
const partnerObj = {
  firstName:"Chase",
  lastName:"Turner",
  age:24,
  hairColor:"Black",
  fullName () {
    return `Hello, my name is ${this.firstName} ${this.lastName}`;
  }
};
//print out the results of the partnerObj method
partnerObj.fullName();
//print out 2 values in partnerObj
console.log(partnerObj.age, partnerObj.hairColor);
//reassign 1 value in partnerObj to 'cars'
partnerObj.age = 'cars'

console.log(partnerObj);
//make an array from all of the object keys store in a variable named partnerArr
const partnerArr = Object.keys(partnerObj);
console.log(partnerArr);
//for every key in the object print out the key and the value
for (const prop in partnerObj) {
  console.log(`${prop}
${partnerObj[prop]}`);
}
