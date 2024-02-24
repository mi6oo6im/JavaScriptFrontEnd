function multiplicationTable(num) {
    numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = 1; i <= numArr.length; i++) {
        const element = numArr[i];
        console.log(`${num} X ${i} = ${num * i}`);
    }
}

multiplicationTable(5);
multiplicationTable(2);