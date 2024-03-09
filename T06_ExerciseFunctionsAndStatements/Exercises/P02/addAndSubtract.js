function solve(num1, num2, num3) {
    const sum = (x, y) => x + y;
    const subtract = (x, y) => x - y;
    console.log(subtract(sum(num1, num2), num3));
}

solve(23, 6, 10);
console.log('------------');
solve(1, 17, 30);
console.log('------------');
solve(42, 58, 100);
console.log('------------');