// Order of proceesings
// 1 - Place Order (2s)
// 2 - Cut Fruit (2s)
// 3 - Add water and ice (1s)
// 4 - Start the machine (1s)
// 5 - Select container (2s)
// 6 - Select Toppings (3s)
// 7 - Serve Ice cream (2s)

// Promises - Resolve or Reject
// If resolved => .then(); .then(); .finally()
// If rejected => .catch; .finally()

// Stock data
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};

// Shop status
let is_shop_open = true;

// Creating a promise -- taking a time(integer), work(function)
let order = (time, work) =>{

    return new Promise((resolve, reject) => {

        if(is_shop_open){

            setTimeout(() => {
                resolve(work())
            }, time);
        } 
        
        else{
            reject(console.log("Our shop is closed."))
        }
    })
}

// Driver program
order(2000, () => console.log(`${stocks.Fruits[0]} was selected.`))

// Step 2
.then(() => {
    return order(0000, () => console.log("Production has started."));

})

// Step 3
.then(() => {
    return order(2000, () => console.log("The fruit was chopped"))
})

// Step 4
.then(() => {
    return order(2000, () => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected.`)
    })
})

// Step 5
.then(() => {
    return order(1000, () => {
        console.log("Start the machine")
    })
})

// Step 6
.then(() => {
    return order(2000, () => {
        console.log(`Ice Cream placed on ${stocks.holder[1]}`)
    })
})

// Step 7
.then(() => {
    return order(3000, () => {
        console.log(`${stocks.toppings[0]} as toppings.`)
    })
})

// Step 8
.then(() => {
    return order(2000, () => console.log("Serve Ice Cream"))
})
