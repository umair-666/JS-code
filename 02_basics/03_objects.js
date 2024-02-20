// singleton
// Object.create

// object literals - > no singleton

const mySym = Symbol("key1")  //declaration is different in object, see below


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)     //1st way
// console.log(JsUser["email"])  // 2nd way (preferred)
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)        //freeze krne se value propagate nhi hoga aage code me
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //access object variable using this keyword
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());