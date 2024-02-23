function validityCheck(x1, y1, x2, y2) {
    function test(distance) {
        const test = distance;
        if (test % 1 == 0) {
            return 'valid';
        } else {
            return 'invalid';
        }
    }
    console.log(`{${x1}, ${y1}} to {0, 0} is ${test(Math.sqrt(x1*x1 + y1*y1))}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${test(Math.sqrt(x2*x2 + y2*y2))}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${test(Math.sqrt((x2 - x1) ** 2 + (y2 - y2) ** 2))}`);
}

validityCheck(3, 0, 0, 4)
validityCheck(2, 1, 1, 1)

