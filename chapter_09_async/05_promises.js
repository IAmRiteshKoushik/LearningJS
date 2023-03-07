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


