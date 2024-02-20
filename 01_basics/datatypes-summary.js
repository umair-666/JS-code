//how data is stored and acessed in memory -> this is how we differentiate between two datatypes


//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt   ->call by value, copy milta hai

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);   //false

const bigNumber = 3456543576654356754
console.log(typeof bigNumber);

                                                /*JS is Dynamically typed language */

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++

    /*
     Stack (primitive)       Heap(non-primitive)

     copy                    reference


     */


    //call by reference -> changes in variable is shown in the original variable when changed through another variable
     let userOne = {
        email: "umair@gov.in",
        age : 21
     }

     let userTwo = userOne; //reference copy made

     userTwo.email = "umair@rbi.in"

     console.log(userOne);
     console.log(userTwo);