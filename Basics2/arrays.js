//Arrays

let arr = [1, 2, 3, 4, 5];

let arr2 = ["pramodh", 1, 2, 3, true, false, null, undefined, { name: "pramodh" }, [1, 2, 3]];

console.log(arr2[0]); // Output: "pramodh"
console.log(arr2[8].name); // Output: "pramodh"
console.log(arr2[9][1]); // Output: 2

//arrays are resizable and can hold any type of data, including other arrays and objects.
// shallow copy => same reference, 
// deep copy => new reference

// Array methods

arr.push(6); // Adds 6 to the end of the array
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

arr.pop(); // Removes the last element (6)
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr.unshift(9); // Adds 9 to the beginning of the array
console.log(arr); // Output: [9, 1, 2, 3, 4, 5]

arr.shift(); // Removes the first element (9)
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr.splice(2, 0, "a", "b"); // Inserts "a" and "b" at index 2 without removing any elements
console.log(arr); // Output: [1, 2, "a", "b", 3, 4, 5]

arr.splice(2, 2); // Removes 2 elements starting from index 2 ("a" and "b")
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr.splice(4); // removes all elements starting from index 4 (removes 5)
console.log(arr); // Output: [1, 2, 3, 4]

const slicedArr = arr.slice(1, 4); // Creates a new array with elements from index 1 to 3
console.log(slicedArr); // Output: [2, 3, 4]
console.log(arr); // Original array remains unchanged: [1, 2, 3, 4, 5]

arr.slice(2); // Modifies the original array to contain only elements from index 2 to the end
console.log(arr); // Output: [3, 4, 5]

const index = arr.indexOf(3); // Finds the index of the first occurrence of 3
console.log(index); // Output: 2

const includesFour = arr.includes(4); // Checks if 4 is in the array
console.log(includesFour); // Output: true

const arrString = arr.join(", "); // Joins the array elements into a string with ", " as a separator
console.log(arrString); // Output: "1, 2, 3, 4, 5"

const newArr = arr.concat([6, 7]); // Creates a new array by concatenating [6, 7] to arr
console.log(newArr); // Output: [1, 2, 3, 4, 5, 6, 7]
console.log(arr); // Original array remains unchanged: [1, 2, 3, 4, 5]

const reversedArr = arr.reverse(); // Reverses the array in place
console.log(reversedArr); // Output: [5, 4, 3, 2, 1]
console.log(arr); // Original array is also reversed: [5, 4, 3, 2, 1]

arr.sort((a, b) => a - b); // Sorts the array in ascending order
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr.sort((a, b) => b - a); // Sorts the array in descending order
console.log(arr); // Output: [5, 4, 3, 2, 1]

const mappedArr = arr.map(x => x * 2); // Creates a new array by multiplying each element by 2
console.log(mappedArr); // Output: [10, 8, 6, 4, 2]
console.log(arr); // Original array remains unchanged: [5, 4, 3, 2, 1]

const nums = [1, 2, 3, 4, 5];
const nums2= [6, 7, 8, 9, 10];

const nums3 = [...nums, ...nums2]; // Combines nums and nums2 into a new array using the spread operator
console.log(nums3); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(Array.isArray(nums)); // Checks if nums is an array
console.log(Array.from("hello")); // Creates an array from the string "hello"
console.log(Array.of(1, 2, 3)); // Creates a new array with the specified elements


