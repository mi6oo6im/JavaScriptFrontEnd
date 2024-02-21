function printAndSum(sNum, eNum) {
    let numArr = [];
    let sum = 0;
    for (let i = sNum; i <= eNum; i++) {
        numArr.push(i);
        sum += i;
    }
    // console.log(numArr.join(' '));
    // console.log(`Sum: ${sum}`);
    
    console.log(`${numArr.join(' ')}\nSum: ${sum}`);
}

printAndSum(5, 10)
printAndSum(0, 26)
printAndSum(50, 60)