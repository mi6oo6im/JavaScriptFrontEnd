function solve(grade) {
    
    function score(grade) {
        if (grade < 3) {
            return 'Fail (2)';
        } else if (grade <3.5) {
            return `Poor (${grade.toFixed(2)})`;
        } else if (grade < 4.5) {
            return `Good (${grade.toFixed(2)})`;
        } else if (grade < 5.5) {
            return `Very good (${grade.toFixed(2)})`;
        } else {
            return `Excellent (${grade.toFixed(2)})`;
        }
    }
    console.log(score(grade));
}

solve(3.33);
console.log('-----------------');
solve(4.50);
console.log('-----------------');
solve(2.99);
console.log('-----------------');