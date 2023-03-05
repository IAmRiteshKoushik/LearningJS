// Sort things alphabetically (not numerically)
// Can also be considered as ASCII value wise sorting.
let b = [1, 2, 11, 54, 65, 23]
b.sort()
console.log(b)

// But if we want to make a numeric sort (not alphabetically)
let a = [1, 11, 2, 22, 3, 33]
a.sort((x, y) => x - y)
console.log(a)

// By using the compare function as an optional parameter
// if (x - y) > 0; x > y => y to be sorted before x
// if (x - y) < 0; y > x => x to be sorted before y
// if (x - y) = 0; y = x => No changes in the sorting order

