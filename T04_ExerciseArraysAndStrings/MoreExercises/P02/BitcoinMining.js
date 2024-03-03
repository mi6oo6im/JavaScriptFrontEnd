function solve(goldMinedArr) {
    const pricePerBitCoin = 11949.16;
    const pricePerGramGold = 67.51;
    let bitcoinsPurchased = 0;
    let dayOfFirstPurchase = 0;
    let moneyLeft = 0;

    goldMinedArr.forEach((goldForTheDay, index) => {
        const dayOfMining = index + 1;
        goldForTheDay = dayOfMining % 3 === 0 ? goldForTheDay -= goldForTheDay * 0.3 : goldForTheDay;
        moneyLeft += goldForTheDay * pricePerGramGold
        if (moneyLeft >= pricePerBitCoin) {
            dayOfFirstPurchase = dayOfFirstPurchase ? dayOfFirstPurchase : dayOfMining; 
            //if this is the first day of purchase - set current day
            let bitcoins = Math.trunc(moneyLeft / pricePerBitCoin);
            let bitcoinCost = bitcoins * pricePerBitCoin;
            bitcoinsPurchased += bitcoins;
            moneyLeft -= bitcoinCost;
        }
    });

    console.log(`Bought bitcoins: ${bitcoinsPurchased}`);
    if (bitcoinsPurchased){
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchase}`);
    }
    console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);
}

solve([100, 200, 300]);
console.log('------------------------');
solve([50, 100]);
console.log('------------------------');
solve([3124.15, 504.212, 2511.124]);
console.log('------------------------');