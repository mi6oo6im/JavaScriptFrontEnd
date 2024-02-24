function sumDigits(num) {
    let result = 0;
    const numToString = num.toString();
    const lenNum = numToString.length;
    for (let i = 0; i < lenNum; i++) {
        const digit = numToString[i];
        result += Number(digit);
    }
    console.log(result);
}

sumDigits(245678)
sumDigits(97561)
sumDigits(543)