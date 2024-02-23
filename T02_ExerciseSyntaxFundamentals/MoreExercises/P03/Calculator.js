function calculator(n1, operator, n2) {
    const calc = {
        '+' : (x, y) => x + y,
        '-' : (x, y) => x - y,
        '/' : (x, y) => x / y,
        '*' : (x, y) => x * y,
    }
    result = calc[operator](n1, n2);
    console.log(result.toFixed(2));
}

calculator(5, '+', 10);
calculator(25.5, '-', 3);