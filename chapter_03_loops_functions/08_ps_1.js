// Question 01 and 02
let marks = {
    harry : 98,
    rohan : 70,
    aakash : 7
}

// Using for-in loop
for (record in marks){
    console.log(record + " scored " + marks[record])
}

// Alternate approach -- using for loop
for (let i = 0; i < Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}