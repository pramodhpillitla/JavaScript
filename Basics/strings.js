const name = "Pramodh";
const userOne = new String(name); // String object wrapper

// Primitive string vs String object
console.log(typeof name); // "string"
console.log(typeof userOne); // "object"
console.log(name === userOne); // false
console.log(name == userOne); // true (loose equality coerces the object)

console.log("name:" + name); // "name:Pramodh" (concatenation)
console.log(`name: ${name}`); // "name: Pramodh" (template literal)

// Length property
console.log(name.length); // 7

// Character access
console.log(name.charAt(0)); // "P"
console.log(name[0]); // "P" (array-like access)
console.log(name.charCodeAt(0)); // 80 (UTF-16 code unit)
console.log(name.codePointAt(0)); // 80 (Unicode code point)

// Case conversion
console.log(name.toUpperCase()); // "PRAMODH"
console.log(name.toLowerCase()); // "pramodh"
console.log(name.toLocaleUpperCase("tr")); // locale-aware uppercase
console.log(name.toLocaleLowerCase("tr")); // locale-aware lowercase

// Searching and matching
console.log(name.indexOf("m")); // 2
console.log(name.lastIndexOf("o")); // 4
console.log(name.includes("mod")); // true
console.log(name.startsWith("Pra")); // true
console.log(name.endsWith("odh")); // true
console.log(name.search(/od/)); // 3
console.log(name.match(/o./g)); // [ 'od' ]
console.log([...name.matchAll(/o./g)]); // [ [ 'od', index: 4, input: 'Pramodh', groups: undefined ] ]

// localeCompare examples
console.log("apple".localeCompare("banana")); // negative value
console.log("apple".localeCompare("apple", undefined, { sensitivity: "base" })); // 0

// String extraction
console.log(name.slice(1, 4)); // "ram"
console.log(name.slice(1)); // "ramodh"
console.log(name.substring(1, 4)); // "ram"
console.log(name.substring(4, 1)); // "ram" (order swapped automatically)
console.log(name.substr(1, 3)); // "ram" (legacy, still supported in many runtimes)

// Padding
console.log("5".padStart(3, "0")); // "005"
console.log("5".padEnd(3, "0")); // "500"
console.log("abc".padStart(6)); // "   abc"
console.log("abc".padEnd(6)); // "abc   "

// Repetition
console.log("ha".repeat(3)); // "hahaha"
console.log("-".repeat(0)); // ""

// Replace variations
const link = "Visit example.com for examples.";
console.log(link.replace("example.com", "site.org")); // replace first occurrence
console.log(link.replace(/example\.com/g, "site.org")); // replace with regex
console.log(link.replace(/(example)(\.com)/, (_, a, b) => `${a} ${b}`)); // function replacement
console.log("foo foo".replaceAll("foo", "bar")); // "bar bar"
console.log("foo foo".replaceAll(/foo/g, "bar")); // "bar bar"

// Split variations
console.log("a,b,c".split(",")); // [ 'a', 'b', 'c' ]
console.log("a b c".split(" ", 2)); // [ 'a', 'b' ]
console.log("a1b2c".split(/\d/)); // [ 'a', 'b', 'c' ]

// Normalization
const accented = "Café";
console.log(accented.normalize("NFC")); // composed form
console.log(accented.normalize("NFD")); // decomposed form
console.log(accented.normalize("NFKC"));
console.log(accented.normalize("NFKD"));

// Trim and trim variants
const padded = "   hello   ";
console.log(padded.trim()); // "hello"
console.log(padded.trimStart()); // "hello   "
console.log(padded.trimEnd()); // "   hello"
console.log(padded.trimLeft()); // "hello   " (alias)
console.log(padded.trimRight()); // "   hello" (alias)

// Conversion helpers
console.log(name.toString()); // "Pramodh"
console.log(name.valueOf()); // "Pramodh"

// Concatenation variations
console.log(name.concat(" is learning JavaScript."));
console.log([name, "is", "learning"].join(" "));

// Static String methods
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // "Hello"
console.log(String.fromCodePoint(0x1F600)); // "😀"
console.log(String.raw`Line1\nLine2`); // raw string literal with escaped characters preserved

// Escape sequences
const escapedString = "This is a line.\nThis is another line.";
console.log(escapedString);
// Output:
// This is a line.
// This is another line.

const quote = 'He said, "JavaScript is awesome!"';
console.log(quote);

const backslash = "This is a backslash: \\";
console.log(backslash);
