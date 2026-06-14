const date = new Date();
console.log(date); // Output: Current date and time

const specificDate = new Date("2024-01-01");
console.log(specificDate); // Output: January 1, 2024

console.log(date.getFullYear()); // Output: Current year
console.log(date.getMonth()); // Output: Current month (0-11)
console.log(date.getDate()); // Output: Current day of the month
console.log(date.getHours()); // Output: Current hour
console.log(date.getMinutes()); // Output: Current minutes
console.log(date.getSeconds()); // Output: Current seconds

date.setFullYear(2025);
console.log(date); // Output: Updated date with year 2025

const timestamp = date.getTime();
console.log(timestamp); // Output: Milliseconds since January 1, 1970

const newDate = new Date(timestamp);
console.log(newDate); // Output: Date object created from timestamp

console.log(date.toISOString()); // Output: Date in ISO format


console.log(date.toDateString()); // Output: Date in human-readable format
console.log(date.toTimeString()); // Output: Time in human-readable format
console.log(date.toLocaleDateString()); // Output: Date in local format

const date1 = new Date("2026-25-10");
const date2 = new Date("2026-10-25");

console.log(date1 > date2); // Output: false (date1 is invalid, treated as NaN)
console.log(date1 < date2); // Output: false (date1 is invalid, treated as NaN)
console.log(date1.getTime()); // Output: NaN (invalid date)
console.log(date2.getTime()); // Output: Valid timestamp for October 25, 2026   