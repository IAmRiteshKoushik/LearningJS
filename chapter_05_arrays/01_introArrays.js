arr = [3, 4, 5, 6, 7, 8, 9, 12]

// They are like python lists and can store different
// datatypes within a single array. This is the 
// case with most modern day languages
for (let i = 0; i < arr.length ; i++){
    console.log(arr[i])
}

console.log(arr.length)

// Arrays are mutable in JavaScript as elements 
// can be changed 

arr[arr.length] = 43
arr[arr.length] = 53
arr[arr.length] = 63
arr[arr.length] = 73
console.log(arr)
console.log(typeof arr) // This is not a primitive



