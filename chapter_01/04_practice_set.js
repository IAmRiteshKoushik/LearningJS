// Question 01 --
let t = "This is a string variable";
let f = 2343243;
console.log(t + f); // Concatenation to String
console.log(f + t); // Concatenation to String



// Question 02 --
console.log(typeof (t + f))



// Question 03 --
// It is not compulsory to keep the key values 
// as strings, they can be without strings as well
const object = {
    name: "Harry",
    section: 1,
    isPrincipal: false
}
// object = 54; ERROR -- Constant objects cannot be changed



// Question 04 --
// But, when editing the JSON, we can only do so by using strings
// object[isTeacher] = false; ERROR 
object['isTeacher'] = false;
console.log(object);

// Even though object is a constant JSON, we can edit 
// it's properties. We cannot change the datatype
// but it can afford edits in the key-pair value.



// Question 05
const word_meaning = {
    "apple":"Red colour fruit",
    "banana":"Yellow colour fruit",
    "cauliflower":"Flowery vegetable"
}

console.log(word_meaning);