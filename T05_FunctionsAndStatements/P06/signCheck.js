function solve(...numbers) {
    function getSign(numbersArr) {
        let isPositive = true;
        for (const num of numbersArr) {
            if (num < 0) {
                if (isPositive) {
                    isPositive = false;
                } else {
                    isPositive = true;
                }
            }
        }
        return isPositive ? 'Positive' : 'Negative';
    }
    console.log(getSign(numbers));
}

function fancySolve(num1, num2, num3) {
    function getIsPositiveFlag(num1, num2, num3) {
        return ((num1 < 0) + (num2 < 0) + (num3 < 0)) % 2 === 0; 
        // if the negative numbers are even number or zero return true else false
    }
    const result = getIsPositiveFlag(num1, num2, num3) ? 'Positive' : 'Negative';
    console.log(result);
}

fancySolve(5,
    12, 
    -15);
console.log('----------');
fancySolve(-6,
    -12,    
    14);
console.log('----------');
fancySolve(-1,
    -2,    
    -3);
console.log('----------');