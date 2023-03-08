// Stock data
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};

// Shop status
let is_shop_open = true;

// Declaring a asynchornous function
async function order (){
    try{
        await abc;
    }
    catch(error){
        console.log("abc does not exist", error);
    }
    finally{
        console.log("runs code anyways");
    }
}

order();
