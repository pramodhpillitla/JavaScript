//declaration is two types

//1. object literal
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(person.name); // Output: "John"
console.log(person["age"]); // Output: 30

//special accessing of symbols in object
const sym1 = Symbol("sym1");
const sym2 = Symbol("sym2");

const obj ={
    [sym1] :"symbol 1",
    [sym2] :"symbol 2"
}

console.log(obj[sym1]); // Output: "symbol 1"
console.log(obj[sym2]); // Output: "symbol 2"
// obj.sym1; // Output: undefined, because sym1 is a symbol and cannot be accessed using dot notation. It must be accessed using bracket notation with the symbol as the key.

//Object.freeze() can be used to make an object immutable, meaning that its properties cannot be changed, added, or removed. This is useful for creating constants or ensuring that an object remains unchanged throughout the application.

//2. constructor function 
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

//singleton means only one instance of the object is created and used throughout the application. In JavaScript, we can create a singleton object using an object literal or a constructor function.
//for example, using an object literal:
const singleton = {
    name: "Singleton Object",
    getName: function() {
        return this.name;
    }
};

console.log(singleton.getName()); // Output: "Singleton Object"

//using a constructor function:
function Singleton(name) {
    if (!Singleton.instance) {
        this.name = name;
        Singleton.instance = this;
    }
    return Singleton.instance;
}

const singleton1 = new Singleton("First Instance");
const singleton2 = new Singleton("Second Instance");

console.log(singleton1.getName()); // Output: "First Instance"
console.log(singleton2.getName()); // Output: "First Instance"
console.log(singleton1 === singleton2); // Output: true 