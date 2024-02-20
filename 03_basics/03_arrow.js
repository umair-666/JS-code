const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  //node me empty object;  browser me window object

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);  //undefined
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); //undefined
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);  // {}
}
// chai()


// const addTwo = (num1, num2) => {     //1st way
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  //2nd way

// const addTwo = (num1, num2) => ( num1 + num2 )   //3rd way, return likhne ka zarurat nhi

const addTwo = (num1, num2) => ({username: "hitesh"})  //return object


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()