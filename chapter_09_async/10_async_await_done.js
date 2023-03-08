// Stock data
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};

// Shop status
let is_shop_open = true;

// Time function
function time(ms){
    return new Promise((resolve, reject) => {
        if(is_shop_open){
            setTimeout(resolve, ms);
        } else{
            reject(console.log("shop is closed"))
        }
    });
}

// Asynchronous function
async function kitchen() {
    try{
        await time(2000);
        console.log(`${stocks.Fruits[0]} was selected.`);

        await time(0000);
        console.log("production has started");

        // Step 02
        await time(2000);
        console.log("fruit has been chopped");

        // Step 03
        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

        // Step 04
        await time(1000);
        console.log(`Start the machine`);

        // Step 05
        await time(2000);
        console.log(`ice cream placed on ${stocks.holder[1]}`);

        // Step 06
        await time(3000);
        console.log(`${stocks.toppings[0]} as toppings.`);

        // Step 07
        await time(2000);
        console.log(`Serve Ice Cream`);
    }
    catch(error){
        console.log("customer left", error);
    }
    finally{
        console.log('day ended, shop is closed');
    }
}

// Trigger
kitchen();