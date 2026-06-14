const num = 45;
const num2 = new Number(45);

console.log(num2); // Output: [Number: 45]

console.log(num2.toString().length); // Output: 2

console.log(num2.toFixed(2)); // Output: "45.00"

console.log(num.toPrecision(3)); // Output: "45.0"

console.log(num.toExponential(2)); // Output: "4.50e+1"

console.log(Number.MIN_VALUE); // Output: 5e-324
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308

// ****************** Math *******************

console.log(Math); // Output: [Math: Math] Object with mathematical constants and functions

console.log(Math.abs(-5)); // Output: 5
console.log(Math.ceil(4.2)); // Output: 5
console.log(Math.floor(4.7)); // Output: 4
console.log(Math.round(4.6)); // Output: 5
console.log(Math.max(1, 5, 3)); // Output: 5 
console.log(Math.min(1, 5, 3)); // Output: 1
console.log(Math.pow(2, 3)); // Output: 8
console.log(Math.sqrt(16)); // Output: 4
console.log(Math.random()); // Output: Random number between 0 and 1
console.log(Math.PI);

//Print random number between any two numbers

const min = 1;
const max = 6;

console.log(Math.floor((Math.random()*(max - min +1) + min)))