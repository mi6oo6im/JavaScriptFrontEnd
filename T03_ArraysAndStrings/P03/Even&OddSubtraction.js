function solve(numArr) {
    const evenArr = numArr.filter((x) => x % 2 === 0);
    const oddArr = numArr.filter((x) => x % 2 !== 0);
    const evenSum = evenArr.length ? evenArr.reduce((x, y) => x + y) : 0;
    const oddSum = oddArr.length ? oddArr.reduce((x, y) => x + y) : 0;
    const result = evenSum - oddSum;

    console.log(result);
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);