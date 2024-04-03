// primitive
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null // Not a 0 value
let userEmail; // undefine

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

const bigNumber = 548312910247792n



// Reference (Non primitive)

//Array, objects, functions
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof id);

//https://262.ecma-international.org/5.1/#sec-11.4.3