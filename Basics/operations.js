//+, -, *, **, /, %

let a = 10;
let b = 5;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a ** b); // Exponentiation
console.log(a / b); // Division
console.log(a % b); // Modulus (Remainder)

// Increment and Decrement
a++; // Increment a by 1 (a becomes 11)
b--; // Decrement b by 1 (b becomes 4)

console.log(a); // 11
console.log(b); // 4

// Compound Assignment Operators
a += 5; // Equivalent to a = a + 5 (a becomes 16)
b *= 2; // Equivalent to b = b * 2 (b becomes 8)

console.log(a); // 16
console.log(b); // 8   

//important note :  In JavaScript, the division operator (/) can also be used for floating-point division. If either operand is a floating-point number, the result will be a floating-point number. For example:
console.log(10 / 4); // Output: 2.5
console.log(10 / 2); // Output: 5  

//important note : The modulus operator (%) returns the remainder of a division operation. If the dividend is smaller than the divisor, the result will be the dividend itself. For example:
console.log(5 % 10); // Output: 5
console.log(3 % 7); // Output: 3 

//important note : The exponentiation operator (**) is right-associative, meaning that it evaluates from right to left. For example:
console.log(2 ** 3 ** 2); // Output: 512 (equivalent to 2 ** (3 ** 2))

// console.log(2**3)

console.log("1"+2) // "12" (String concatenation)
console.log("1"-2) // -1 (Numeric subtraction, "1" is converted to 1)
console.log("1"*2) // 2 (Numeric multiplication, "1" is converted to 1)
console.log("1"/2) // 0.5 (Numeric division, "1" is converted to 1)
console.log("10"%3) // 1 (Numeric modulus, "10" is converted to 10)

console.log(true + true) // 2 (true is converted to 1)
console.log(true - false) // 1 (true is converted to 1, false is converted to 0)
console.log(true * false) // 0 (true is converted to 1, false is converted to 0)
console.log(true / false) // Infinity (true is converted to 1, false is converted to 0, division by zero results in Infinity)
console.log(true % false) // NaN (true is converted to 1, false is converted to 0, modulus by zero results in NaN)

console.log(1+3+"3") // "43" (1 + 3 is evaluated first to get 4, then "4" + "3" results in "43")


console.log(+true) // 1 (Unary plus converts true to 1)
console.log(-false) // 0 (Unary minus converts false to 0)

console.log(+"") // 0 (Unary plus converts empty string to 0)