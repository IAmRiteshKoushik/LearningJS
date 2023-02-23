// We use functions when our code is to be
// re-used in different files.

function onePlusAvg(x, y){
    console.log("Done")
    return Math.round(1 + (x + y) / 2)
}

// Here, console.log() prints only what is in
// the return portion of the function and not
// anything else. Other portions of the 
// program is not accessible so there is not
// conflict witht he console.log("DONE") that
// is already there inside her
console.log(onePlusAvg(9, 10));



