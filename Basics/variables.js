const a = 123;
let b = "hello"
var c = "hii"

d = "good morning" // Yes this is also allowed though not a good practice

// a = 213 // not allowed 
b = "hi"
c = "hey"

d = "good evng"

console.table([a,b,c,d])

// just declaring

let e;
var f;
// const g; //const variables should be initialized
console.table([e,f])

// //output :  (index) │ Values    │
// ├─────────┼───────────┤
// │ 0       │ undefined │
// │ 1       │ undefined │
// └─────────┴───────────┘

