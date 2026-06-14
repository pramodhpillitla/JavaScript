console.log( 1 > 2) // false (1 is not greater than 2)
console.log( 1 < 2) // true (1 is less than 2)
console.log( 1 >= 1) // true (1 is greater than or equal to 1)
console.log( 1 <= 2) // true (1 is less than or equal to 2)
console.log( 1 == "1") // true (loose equality, type coercion occurs)
console.log( 1 === "1") // false (strict equality, no type coercion)
console.log( 1 != "1") // false (loose inequality, type coercion occurs)
console.log( 1 !== "1") // true (strict inequality, no type coercion)

console.log( true > false) // true (true is treated as 1 and false as 0)
console.log( true < false) // false (true is treated as 1 and false as 0)
console.log( true >= true) // true (true is treated as 1)
console.log( false <= false) // true (false is treated as 0)

console.log( "apple" > "banana") // false (lexicographical comparison)
console.log( "apple" < "banana") // true (lexicographical comparison)
console.log( "apple" >= "apple") // true (lexicographical comparison)
console.log( "apple" <= "apple") // true (lexicographical comparison)

console.log( null == undefined) // true (loose equality, null and undefined are considered equal)
console.log( null === undefined) // false (strict equality, no type coercion)   

console.log( null > 0) // false (null is treated as 0 in numeric comparisons)
console.log( null < 0) // false (null is treated as 0 in numeric comparisons)
console.log( null >= 0) // true (null is treated as 0 in numeric comparisons)
console.log( null <= 0) // true (null is treated as 0 in numeric comparisons)
console.log( null == 0) // false (loose equality, null is not equal to 0)

