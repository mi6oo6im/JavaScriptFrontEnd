function solve(oderStr, qtyNum) {
    function getSinglePrice(oderStr) {
        const producPrice = {
            coffee: 1.50,
            water: 1.00,
            coke: 1.40,
            snacks: 2.00
        }
        return producPrice[oderStr];
    }

    const totalCost = getSinglePrice(oderStr) * qtyNum;
    console.log(totalCost.toFixed(2));
}

solve("water", 5);
console.log('------------');
solve("coffee", 2);
console.log('------------');