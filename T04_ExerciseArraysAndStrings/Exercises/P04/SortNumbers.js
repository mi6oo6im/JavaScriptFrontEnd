function solve(numArr) {
    const sortedArr = numArr.sort((a, b) => a - b);
    let resultArr = []

    while (sortedArr.length > 0){
        const element = sortedArr.shift();
        resultArr.push(element)
        if (sortedArr.length > 0) {
            const element2 = sortedArr.pop();
            resultArr.push(element2);
        }
    }
    return resultArr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));;
console.log('---------------');