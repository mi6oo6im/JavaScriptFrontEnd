function solve(num) {
    function createRow(num) {
        const row = [];
        row.length = num;
        row.fill(num);
        return row;
    }

    function createMatrix(num) {
        const matrix = [];
        for (let i = 0; i < num; i++) {
            const row = createRow(num);
            matrix.push(row);
        }
        return matrix;
    }

    const myMatrix = createMatrix(num);

    for (const row of myMatrix) {
        console.log(row.join(' '));
    }
}

solve(3);
console.log('----------------');
solve(7);
console.log('----------------');
solve(2);
console.log('----------------');