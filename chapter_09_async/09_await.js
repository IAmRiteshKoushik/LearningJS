// Stock data
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};

// Shop status
let is_shop_open = true;

// Understanding the await keyword
function toppings_choice(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(console.log("Which topping would you love?"))
        }, 3000);
    })
}

async function kitchen(){
    console.log(" A ");
    console.log(" B ");
    console.log(" C ");

    // await() is used to unwrap promises by passing a Promise as the
    // expression. Using await pauses the execution of its surrounding
    // async function until the promise is settles(fulfilled/rejected)
    
    await toppings_choice();
    
    // When execution resumes, the value of the await expression becomes
    // that of a fulfilled promise.

    console.log(" D ");
    console.log(" E ");
}


// Trigger the function

kitchen();

console.log("Cleaning the dishes");
console.log("Cleaning the tables");
console.log("Taking others orders");
