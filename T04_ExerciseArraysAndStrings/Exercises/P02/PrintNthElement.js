function solve(numArr, num) {
    let newNumArr = [];
    for (let i = 0; i < numArr.length; i += num) {
        newNumArr.push(numArr[i]);
    }
    return newNumArr;
}

console.log(solve(['5', '20', '31', '4', '20'], 2));
console.log(solve(['dsa', 'asd', 'test', 'tset'], 2));
console.log(solve(['1', '2', '3', '4', '5'], 6));