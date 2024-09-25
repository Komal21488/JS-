//In programming, let and const are both used to declare variables. 
//The main difference between them is that (let allows the variable to be reassigned multiple times,) 
//while (const creates a variable that cannot be reassigned after it has been assigned a value.)

const accountId = 144553
let accountEmail = "komal@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //not allowed

accountEmail = "kk@gmail.com"
accountPassword = "1098"
accountCity = "banglore"

console.log(accountId);

/*
prefer not to use var
bcoz of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

