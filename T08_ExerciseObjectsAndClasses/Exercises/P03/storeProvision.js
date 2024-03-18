function solve(stockArr, deliveryArr) {
    const stockObj = {}

    for (let i = 0; i < stockArr.length; i += 2) {
        const product = stockArr[i];
        const qty = Number(stockArr[i + 1]);
        
        stockObj[product] = qty;
    }
    
    for (let i = 0; i < deliveryArr.length; i += 2) {
        const product = deliveryArr[i];
        let qty = Number(deliveryArr[i + 1]);
        if (stockObj.hasOwnProperty(product)){
            qty += stockObj[product];
        }
        stockObj[product] = qty;
    }

    for (const key in stockObj) {
        console.log(`${key} -> ${stockObj[key]}`);
    }
}

solve(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas',
        '14', 'Pasta', '4', 'Beer', '2'
    ],
    [    
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ] 
)