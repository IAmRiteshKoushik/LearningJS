// This is another variant of for loop which accesses
// the values of iterables ONLY. Does not apply to JSON
// objects.

let obj = {
    harry: 90,
    shubh: 45,
    shivika: 56,
    ritika: 57,
    shiv: 23
}

for(let i of "Harry"){
    console.log(i)
}

// Remember if you use "let" keyword inside of 
// loop conditions then the variable stays limited
// to local scope. But it can be made global by
// using the "var" keyword.
