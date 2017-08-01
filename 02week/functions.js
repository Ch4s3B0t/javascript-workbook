'use strict';

let cars = ['Ford', 'Mazda', 'Toyota', 'Chevrolet'];
console.log(cars.length);

let moreCars = ['Mitsubishi', 'Tesla', 'Audi', 'Honda'];
let totalCars = cars.concat(moreCars);
console.log(totalCars);

console.log(moreCars.indexOf('Honda'));
console.log(cars.lastIndexOf('Ford'));

let stringOfCars = totalCars.join();
console.log(stringOfCars);

console.log(stringOfCars.split());

let carsInReverse = totalCars.reverse();
console.log(carsInReverse);

console.log(carsInReverse.sort());

let carsRemoved = carsInReverse.slice(2,4);
console.log(carsRemoved);

console.log(carsInReverse.splice(2,2, 'Ford', 'Honda'));

console.log(carsInReverse.push('Ford', 'Honda'));

carsInReverse.pop();
console.log(carsInReverse);

carsInReverse.shift();
console.log(carsInReverse);

carsInReverse.unshift('BMW');
console.log(carsInReverse);

/*let numbers = [23, 45, 0, 2];
function incrementTwo(item) {
  console.log(item + 2);
}
numbers.forEach(incrementTwo)*/

for(let i=0; i < carsInReverse.length; i++){
  console.log(carsInReverse[i]);
}
