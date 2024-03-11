function solve(pointsArr) {
    function pointToCenterValidator(x, y) {
        const distanceToCenter = Math.sqrt(x ** 2 + y ** 2);
        if (distanceToCenter % 1 === 0){
            return 'valid';
        }

        return 'invalid';
    }

    function pointToPointValidator(x1, y1, x2, y2) {
        
        const distanceBetweenPoints = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        
        if (distanceBetweenPoints % 1 === 0){
            return 'valid';
        }

        return 'invalid';
    }
    
    const [x1, y1, x2, y2] = pointsArr;

    const firstToCenter = pointToCenterValidator(x1, y1);
    const secondToCenter = pointToCenterValidator(x2, y2);
    const pointToPoint = pointToPointValidator(x1, y1, x2, y2);

    console.log(`{${x1}, ${y1}} to {0, 0} is ${firstToCenter}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${secondToCenter}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${pointToPoint}`);
}

solve([3, 0, 0, 4]);
console.log('---------------');
solve([2, 1, 1, 1]);
console.log('---------------');