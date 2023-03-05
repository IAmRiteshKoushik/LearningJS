// Filter method
const a = [1, 2, 3, 4, 5]
let b = a.filter((element) => {
    return element < 4
})

// Returns a new array
console.log(a)
console.log(b)

// Map function performs the operation and returns BOOLEAN
// It does not filter out the values like .filter()
let c = a.map((element) => {
    return element < 2
})
console.log(c)
