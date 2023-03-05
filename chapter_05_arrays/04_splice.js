// Splice Operator of an array
// Example 01
const numbers = [1, 2, 3, 4, 5]

// (Arg1, Arg2, Arg3*, ...)
// Arg1 = Starting Index (remember it starts from 0)
// Arg2 = Number of elements to remove
// Arg3* ... = elements to be added (count not defined)
numbers.splice(2, 1, 23, 24)

// Print out the result
console.log(numbers)


// Example 02
const numArr = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 0]
numArr.splice(3, 4, 70)
// Start from 3rd index : "4"
// Remove 4 elements : [4, 5, 6, 7]
// Insert "70"
console.log(numArr)


// Reversing the elements of an array
const digits = [2, 3, 4, 5, 6, 7, 8]
digits.reverse()
console.log(digits)