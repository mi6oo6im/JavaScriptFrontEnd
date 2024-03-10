function solve(numA, numB) {
    function getFactorial(num) {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    const devision = (a, b) => a / b;

    const factorialA = getFactorial(numA);
    const factorialB = getFactorial(numB);
    const result = devision(factorialA, factorialB);
    return console.log(result.toFixed(2));
}

solve(5, 2);
console.log('-----------------');
solve(6, 2);
console.log('-----------------');