function sameNum(number) {
    const numberToStr = number.toString();
    let result = 0;
    let areSame = true;
    for (let i = 0; i < numberToStr.length; i++) {
        const element = numberToStr[i];
        const numElement = Number(element);
        if (i > 0 && areSame){
            if (numElement != Number(numberToStr[i - 1])) {
                areSame = false;
            }
        }
        result += numElement;
    }
    console.log(`${areSame}\n${result}`);
}

sameNum(2222222)
sameNum(1234)