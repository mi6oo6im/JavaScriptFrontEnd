function solve(number) {
    function isPositiveCheck(num) {
        if (num > 1) {
            return true;
        }

        return false;
    }

    function getDevisors(num){
        const numArr = [];
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                numArr.push(i);
            }
        }

        return numArr;
    }

    function sumDevisors(numArr){
        const sum = numArr.reduce((a, x) => a + x, 0);
        return sum;
    }

    const isPositive = isPositiveCheck(number)

    const devisorsArr = getDevisors(number);

    if (isPositive && sumDevisors(devisorsArr) === number){
        return console.log("We have a perfect number!");
    }

    return console.log("It's not so perfect.");
}

solve(6);
console.log('----------------');
solve(28);
console.log('----------------');
solve(1236498);
console.log('----------------');