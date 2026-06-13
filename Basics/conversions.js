console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN
console.log(Number(true)) // 1
console.log(Number(false)) // 0

console.log(String(null)) // "null"
console.log(String(undefined)) // "undefined"
console.log(String(true)) // "true"
console.log(String(false)) // "false"

console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(0)) // false
console.log(Boolean("")) // false
console.log(Boolean(false)) // false
console.log(Boolean(true)) // true
console.log(Boolean(1)) // true
console.log(Boolean("hello")) // true       