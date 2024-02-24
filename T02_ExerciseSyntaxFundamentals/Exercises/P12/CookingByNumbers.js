function cookingByNumbers(strNum, op1, op2, op3, op4, op5) {
    const opsArr = [op1, op2, op3, op4, op5];
    let num = Number(strNum)
    opsArr.forEach(element => {
        switch (element) {
            case 'chop':
            num /= 2;
            break;
            case 'dice':
            num = Math.sqrt(num);
            break;
            case 'spice':
            num += 1;
            break;
            case 'bake':
            num *= 3;
            break;
            case 'fillet':
            num *= 0.8;
            break;
            default:
            break;
        }
        console.log(num);
    });
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');