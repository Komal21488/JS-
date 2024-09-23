// Primitive 

// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 3456543576654356754n


// Reference (Non-Primtive)
 
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "KOMAL",
    age: 21,
}

//     function(){}     (function definition)
const myFunction = function(){
    console.log("Hello World!");
    
}

console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof outsideTemp);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof userEmail);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename 
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "komal@google.com"

console.log(userOne.email);
console.log(userTwo.email);



