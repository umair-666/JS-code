const name = "umair"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //string interpolation

const gameName = new String('hitesh-hc-com')  //usage of JS object

// console.log(gameName[0]);  // h
// console.log(gameName.__proto__); //object


// console.log(gameName.length); // 13
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // t
console.log(gameName.indexOf('t')); // 2

const newString = gameName.substring(0, 4)
console.log(newString); // hite

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); // empty


const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));