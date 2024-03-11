function solve(number) {
    const treshold = 5;
    function calcAvg(num) {
        const numArr = num.toString().split('').map(x => Number(x));
        const avgNum = numArr.reduce((a,x,i,arr) => a + x / arr.length, 0);
        return avgNum;
    }

    function newNumber(number) {
        const newNum = Number(number
            .toString()
            .concat('9')
            );
        return newNum;
    }

    let average = calcAvg(number)

    while (average <= treshold) {
        number = newNumber(number);;
        average = calcAvg(number);
    };

    console.log(number);
}

solve(101);
console.log('-----------');
solve(5835);
console.log('-----------');