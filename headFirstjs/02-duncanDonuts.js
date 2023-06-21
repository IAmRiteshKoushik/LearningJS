function updateOrder() {
    const TAXRATE = 0.0925;
    const DONUTPRICE = 0.50;

    // Fetching values
    var numCakeDonuts = document.getElementById("cakedonuts").value;
    var numGlazedDonuts = document.getElementById("glazeddonuts").value;

    // Verifying for empty input boxes
    if (isNaN(numCakeDonuts)){
        numCakeDonuts = 0;
    }
    if (isNaN(numGlazedDonuts)){
        numGlazedDonuts = 0;
    }

    // Crunching numbers
    var subTotal = (numCakeDonuts + numGlazedDonuts) * DONUTPRICE;
    var tax = subTotal * TAXRATE;
    var total = subTotal + tax;

    // Injecting results into webpage
    document.getElementById("subtotal").value = "$" + subTotal.toFixed(2);
    document.getElementById("tax").value = "$" + tax.toFixed(2);
    document.getElementById("total").value = "$" + total.toFixed(2);

}