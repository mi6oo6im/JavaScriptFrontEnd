/* function largestNumber(fNum, sNum, tNum) {
    console.log(Math.max(fNum, sNum, tNum));
}*/

function largestNumber(fNum, sNum, tNum) {
    let result = null
    if (fNum >= sNum && fNum >= tNum) {
        result = `The largest number is ${fNum}.`;
    } else if (sNum >= fNum && sNum >= tNum) {
        result = `The largest number is ${sNum}.`
    } else {
        result = `The largest number is ${tNum}.`
    }
    console.log(result);
}


largestNumber(5, -3, 16)
largestNumber(-3, -5, -22.5)