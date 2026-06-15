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

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const obj3 = Object.assign({}, obj1, obj2);

console.log(obj3) // Output: { a: 1, b: 3, c: 4 }

const obj4 = {...obj1, ...obj2}
console.log(obj4) // Output: { a: 1, b: 3, c: 4 } // these are two methods of merging two objects. The Object.assign() method copies the properties of one or more source objects to a target object, while the spread operator (...) creates a new object by copying the properties of the source objects. Both methods will overwrite properties with the same key, with the last source object taking precedence.


//nested objects

const person2 = {
    name: "Alice",
    age: 25,
    city: "Los Angeles",
    address: {
        street: "123 Main St",
        zip: "90001"
    }
};

console.log(person2.address.street); // Output: "123 Main St"
console.log(person2["address"]["zip"]); // Output: "90001"  

//object destructuring
const { name, age, city } = person;
console.log(name); // Output: "John"
console.log(age); // Output: 30
console.log(city); // Output: "New York"

const { name: personName, age: personAge } = person;
console.log(personName);
console.log(personAge);

//json stands for JavaScript Object Notation, and it is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. JSON is often used to transmit data between a server and a web application as an alternative to XML.

const jsonString = '{"name": "Bob", "age": 40, "city": "Chicago"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);


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