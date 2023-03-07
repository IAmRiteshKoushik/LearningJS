// More on callbacks

let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

let order = (Fruit_name, call_production) => {
    
    // It takes two seconds to select the fruit
    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected.`)
        call_production();
    }, 2000)
}

// Creating a callback HELL.
let production = () => {

    // Starts production with 0 delay
    setTimeout(() => {
        console.log('Production has started...');

        setTimeout(() => {
            console.log("The fruit has been chopped");

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(() => {
                    console.log("The Machine was started...");

                    setTimeout(() => {
                        console.log(`The ice-cream was placed in the${stocks.holder[0]}`);

                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was added as toppings`);

                            setTimeout(() => {
                                console.log("Serve ice-cream");

                            }, 1000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000)
    }, 0000)

}

order(0, production)
 