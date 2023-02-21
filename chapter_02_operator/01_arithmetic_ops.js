console.log("Operators in JS")

// Preliminary Data
let a = 45;
let b = 4;

// Different Arithmetic Operators
console.log("a + b =", a+b);
console.log("a - b =", a-b);R
console.log("a / b =", a/b);
console.log("a * b =", a*b);
console.log("a ** b =", a**b);
console.log("a % b =", a%b);

// Tricky Cases - 01
console.log("a ++ =", a++); // This prints the original value of "a" and then increments it
console.log("a -- =", a--); // This prints the incremented value of "a" and then decrements it
console.log(a); // We can see that the value of "a" has been decremented to its original value

// Tricky Cases - 02
console.log("++b = ", ++b); // Increments "b" and then prints out the value of b
console.log("--b = ", --b); // Decrements "b" and then prints out the value of b
