function solve(num1, num2, operator) {
    function getFunction(operatorStr) {
        const functions = {
            multiply : (x, y) => x * y,
            divide : (x, y) => x / y,
            add : (x, y) => x + y,
            subtract : (x, y) => x - y
        };
        return functions[operatorStr];
    }
    const currentFunc = getFunction(operator);
    console.log(currentFunc(num1, num2));
}

solve(5, 5, 'multiply');
console.log('------------');
solve(40, 8, 'divide');
console.log('------------');
solve(12, 19, 'add');
console.log('------------');
solve(50, 13, 'subtract');
console.log('------------');