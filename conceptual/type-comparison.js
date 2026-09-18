// ===
console.log(5 === 5);   // true
console.log(5 === '5'); // false (number vs string)
console.log(null === undefined); // false (different types)

// == 
console.log(5 == '5'); // true (string '5' is converted to number 5)
console.log(false == 0); // true (false is converted to number)
console.log(null == undefined); // true (special rule in JavaScript)