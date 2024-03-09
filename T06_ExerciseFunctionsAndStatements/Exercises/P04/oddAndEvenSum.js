function solve(number) {
    function getArrOfNums(num) {
        return (number.toString().split('')).map(x => Number(x));
    }

    function getEvenSum(numArr){
        const sum = numArr.reduce((sum, x) => sum + (x % 2 === 0 ? x : 0), 0);
        return sum;
    }
    function getOddSum(numArr){
        const sum = numArr.reduce((sum, x) => sum + (x % 2 === 1 ? x : 0), 0);
        return sum;
    }
    
    let numArray = getArrOfNums(number);
    let oddSum = getOddSum(numArray);
    let evenSum = getEvenSum(numArray);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);
console.log('---------------------');
solve(3495892137259234);
console.log('---------------------');