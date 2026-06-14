//Primary
/*
Number,
String,
Boolean,
null,
undefined,
symbol
*/

//non-primary
/*
Object
Array
Function
Date
RegExp
Error
*/

console.log(typeof null) //object
console.log(typeof undefined) //undefined

const myObj = {
    name: "John",
    age: 30,
    isStudent: false
}

const heroes = ["Superman", "Batman", "Wonder Woman"]

function greet(name) {
    return `Hello, ${name}!`;
}

const currentDate = new Date()

const regex = /hello/i

const error = new Error("Something went wrong")

console.log(typeof myObj) //object
console.log(typeof heroes) //object (arrays are a type of object in JavaScript)
console.log(typeof greet) //function
console.log(typeof currentDate) //object
console.log(typeof regex) //object
console.log(typeof error) //object