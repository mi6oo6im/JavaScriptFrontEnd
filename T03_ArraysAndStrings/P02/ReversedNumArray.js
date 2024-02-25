function solve(numCount, numArr) {
    let slicedArr = numArr.slice(0, numCount);
    let reversedArr = slicedArr.reverse();
    console.log(reversedArr.join(' '));
}

solve(3, [10, 20, 30, 40, 50])
// solve(66, 43, 75, 89, 47)
// solve(-1, 20, 99, 5)