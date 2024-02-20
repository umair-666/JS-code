const account_id = 14435
var account_name = "umair-666"
let account_email = "umair@gov.in"
var account_password = "12333"
account_city = "Delhi"
// console.log(account_id);

/*
Prefer not to use block scope->
because of issues in block scope and functional scope
*/

let account_state, acc = null;

console.table([account_name, account_id, account_password, account_email, account_city, account_state, acc])




/* JavaScript is a dynamically typed language, which means that data types of variables 
are determined by the value they hold at runtime and can change throughout 
the program as we assign different values to them    */