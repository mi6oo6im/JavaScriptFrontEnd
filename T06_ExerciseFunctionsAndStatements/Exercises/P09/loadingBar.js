function solve(number) {
    function loadingBar(number) {
        const percentSigns = number / 10;
        const pointSigns = 10 - percentSigns;
        const result = `${number}% [${'%'.repeat(percentSigns)}${'.'.repeat(pointSigns)}]`
        return result;
    }
    if (number === 100){
        return console.log('100% Complete!\n[%%%%%%%%%%]');
    }
    const finalResult = `${loadingBar(number)}\nStill loading...`
    return console.log(finalResult);
}

solve(30);
console.log('-----------');
solve(50);
console.log('-----------');
solve(100);
console.log('-----------');