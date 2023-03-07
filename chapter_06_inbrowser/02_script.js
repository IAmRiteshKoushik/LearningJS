console.log(console)

// Output:
/* -------------------------------
Object [console] {
    log: [Function: log],
    warn: [Function: warn],
    dir: [Function: dir],
    time: [Function: time],
    timeEnd: [Function: timeEnd],
    timeLog: [Function: timeLog],
    trace: [Function: trace],
    assert: [Function: assert],
    clear: [Function: clear],
    count: [Function: count],
    countReset: [Function: countReset],
    group: [Function: group],
    groupEnd: [Function: groupEnd],
    table: [Function: table],
    debug: [Function: debug],
    info: [Function: info],
    dirxml: [Function: dirxml],
    error: [Function: error],
    groupCollapsed: [Function: groupCollapsed],
    Console: [Function: Console],
    profile: [Function: profile],
    profileEnd: [Function: profileEnd],
    timeStamp: [Function: timeStamp],
    context: [Function: context]
  }
*/
 

// There are various methods for the "console" class
console.error('This is an error')   // Helps in segregating messages in console by keeping errors, warnings etc separate 
console.assert(5 < 53)  // Shows "assertion failed" in case the boolean value generated is false
console.clear()  // Output cannot be scene in VS Code output window but it clears the console screen (just like terminal)

// In order to present key-value pairs in tabular format -- console.table(JSON_obj)
let obj = {a:1, b:2, c:3}
console.table(obj)

// Show warnings in browser console 
console.warn("Please do not drink and drive")

// Showing some information in the 'info' section of the browser console
console.info('Hey, do not skip this step')

// NOTICE: Error messages or warning messages always show at the end of the document for some reason (need to figure out)



