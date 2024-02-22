function cookingByNumbers(strNum, op1, op2, op3, op4, op5) {
    const opsArr = [op1, op2, op3, op4, op5];
    let num = Number(strNum)
    const operations = {
        chop : (x) => x / 2,
        dice : (x) => Math.sqrt(x),    
        spice : (x) => x + 1,
        bake : (x) => x * 3,
        fillet : (x) => x * 0.8,
    }
    opsArr.forEach(element => {
        num = operations[element](num);
        console.log(num);
    });
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');