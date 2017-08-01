let cars = ['Ford', 'Mazda', 'Toyota', 'Chevrolet'];
let moreCars = ['Mitsubishi', 'Tesla', 'Audi', 'Honda'];
let totalCars = cars.concat(moreCars);
let carsInReverse = totalCars.reverse();
for(let i=0; i < carsInReverse.length; i++){
console.log(carsInReverse[i]);
}

let persons = {
firstName: "Jane",
lastName: "Doe",
birthDate: "Jan 5, 1925",
gender: "female"
};

for (var prop in persons) {
console.log(`persons.${prop} = ${persons[prop]}`);
}

for(key in persons){
if (key === 'birthDate'){
  console.log(persons['birthDate']);
}
}

let number = 0
while (number < 1000){
//console.log(number);
number += 1
}

do {
//console.log(number);
number +=1
}while(number<1000);
