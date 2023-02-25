// String methods
let variable = 'Harry'
console.log(variable.length)

// Changing casing
console.log(variable.toUpperCase());
console.log(variable.toLowerCase());

//  Slicing of strings - Similar to python but it is a method
console.log(variable.slice(2,4))

// Replace things in strings
let str = "Hello in I am in this is in"
console.log(str.replace("in", "of"))  // Only changes the first occurance

// Concatenation without "+"
// This function can take an unlimited number of arguments
let friend = "Naman"
console.log(variable.concat("is a friend of ", friend, "OK"))


// Strip() == trim in javascript
let thisvariable = "       Hello         "
console.log(thisvariable.trim())

// Remember that strings are immutable so these
// functions do not make changes to the string.
// they just make a copy of the string and produce
// changes. Not the ORIGINAL string.





