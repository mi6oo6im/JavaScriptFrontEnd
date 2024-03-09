function solve(numArr) {
    function isPalindrome(num) {
        const numStr = num.toString();
        const lastIndex = numStr.length - 1;
        let halfLenght = numStr / 2;
        if (numStr % 2 === 1){
            halfLenght = (numStr - 1) / 2
        }
        for (let i = 0; i < halfLenght; i++) {
            if (numStr[i] !== numStr[lastIndex - i]){
                return false
            }
        }
        return true
    }

    function iteratorFunc(numArr) {
        for (const element of numArr) {
            console.log(isPalindrome(element));
        }        
    }
    iteratorFunc(numArr);
}

solve([123,323,421,121]);
console.log('----------------');
solve([32,2,232,1010]);
console.log('----------------');