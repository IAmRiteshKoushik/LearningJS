// Problem 03
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 20, 30, 40];
const b = a.filter((element) => {
    return element % 10 == 0;
})
console.log(b)

// Problem 04
const c = [1, 2, 3, 4, 5]
const d = c.map((element) => {
    return element * element;
})
console.log(d)

// Problem 05
const n = [1, 2, 3, 4, 5];
const fact = n.reduce((h1, h2) => {
    return h1 * h2;
})
console.log(fact)
