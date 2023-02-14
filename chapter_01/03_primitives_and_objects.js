// There are 7 different data types in JavaScript

// N - NULL
// N - Number
// S - Symbol
// S - String
// B - Boolean
// B - BigInt
// U - Undefined

let a = null;
let b = 34;
let c = Symbol("I am a nice symbol");
let d = "Hello, I am amazing";
let e = true;
let f = BigInt("1234"); // Can store values upto (2^53) - 1
let g = undefined; // If we leave it empty, it would be considered as undefined.


console.log(a, b, c, d, e, f, g);
// To find the type of variable
console.log(typeof c) // Here, is should be symbol


// Creating objects in JavaScript (JSON)
// Same as Python Dictionaries but
// has greater functionalities than that. 
const item = {
    "Harry" : true,
    "Shubh" : false,
    "Lovish" : 67,
    "Rohan" : undefined
}
// Accessing the JSON
console.log(item["Lovish"])

