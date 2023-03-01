// Array methods

// toString()
let arr = [1,2,3,4,5,6]
console.log(arr)
console.log(arr.toString())
console.log(arr)

// The toString() function creates a copy of the array and 
// and makes alterations to them rather than chaning the 
// datatype of the original array to string


// join function
console.log(arr.join('-'))


// pop function - permanent removal of last element from array
arr.pop()
console.log(arr)


// push function - Basically, appending towards the end 
console.log(arr.push(345))  // Printing this returns the 
// length of the array
console.log(arr)


// shift() function - Removes the first element from the array
console.log(arr.shift())  // returns the deleted element
console.log(arr)


// unshift() function - Adds to the first element of the array
console.log(arr.unshift(34))  // returns the length of the array
console.log(arr) 


// delete() function
let d = [7,8,9,0]
delete d[1]  
console.log(d)
console.log(d.length)  // The length does not reduce
// <empty item> is added to the list in place of previous item


// concat() function
let a1 = [1, 3, 6, 8]
let a2 = [11, 13, 16, 18]
let a3 = [111, 113, 116, 118]

let a4 = a1.concat(a2, a3)
console.log(a1)  // Does not change the original array
console.log(a4)  // Changes are stored in a copy





