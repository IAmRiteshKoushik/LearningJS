// Getting started
console.log("Understanding the difference: var, let, const")

// Different datatypes in JS

var a = 45;
var b = 'Harry';
var c = null;
var d = undefined;
//  Though not compulsory, it is good practice to add semi-colon after
// the ending of each line of code in JS. It assures that we run 
// into less number of errors

// Difference between var and let -- "Var" declares variables in global
// scope but "let" delcares variables in local or block scope. 
// You can re-delcare "var" but you cannot re-declare "let" in the 
// same scope
var q = 23
{
    var q = 57
    console.log(q)

}
console.log(q) // Value altered globally


let k = 76
{
    let k = 45
    console.log(k) // Value altered in local scope
}
console.log(k)

// Preferably use "let" instead of "var" as it is a better practice. 


// Constant variable (what an irony) is a variable whose value 
// is immutable.
const author = 'JK Rowling';
// let author = 'Rudyard Kypling';
// gives error
console.log(author)
