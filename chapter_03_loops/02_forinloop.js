// This is just a variant of for loop
// Consider the following JSON

let obj = {
    harry: 90,
    shubh: 45,
    shivika: 56,
    ritika: 57,
    shiv: 23
}

for (let a in obj){
    console.log("Marks of " + a + " are " + obj[a])
}
