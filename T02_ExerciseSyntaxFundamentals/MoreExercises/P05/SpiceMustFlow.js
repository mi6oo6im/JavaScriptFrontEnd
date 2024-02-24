/**
 * 
 * @param {number} yield 
 */

function spiceFlow(yield) {
    let totalSpiceStorage = 0;
    let daycount = 0;
    const decrementSpice = 10;
    const profitableYield = 100;
    const dailySpiceConsumed = 26; 
    const finalSpiceConsumed = 26;//can't exceed storage
    
    while (yield >= profitableYield) {
        daycount++;
        totalSpiceStorage += yield - dailySpiceConsumed;
        yield -= decrementSpice;
    }
    if (totalSpiceStorage >= finalSpiceConsumed){
        totalSpiceStorage -= finalSpiceConsumed;
    } else totalSpiceStorage = 0;

    console.log(`${daycount}\n${totalSpiceStorage}`);
}

spiceFlow(111);
spiceFlow(450);