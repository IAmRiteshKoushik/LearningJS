// Problem 01
const arr = [1, 2, 3, 4, 5, 6, 7]
let user = prompt('How many elements to add?')
result = parseInt(user)

for(let i = 1; i <= result; i++){
    let input = prompt('Enter element >')
    let number = parseInt(input)
    arr.push(number)
}

console.log(arr)