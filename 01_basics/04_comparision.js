// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

let sc = "02" > 1;
console.log(sc); // true
console.log(typeof sc);  // boolean

console.log(null > 0); // false
console.log(null == 0); //JS me comparison and equality different hai ; false
console.log(null >= 0);  // >= converts null to number, i.e true

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

// ===     : also checks the datatype

console.log("2" === 2);