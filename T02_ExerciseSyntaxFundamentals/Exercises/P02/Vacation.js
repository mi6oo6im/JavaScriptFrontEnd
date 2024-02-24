function vacation (groupSize, groupType, weekDay) {
    let price = null;

    if (groupType == 'Students'){
        if (weekDay == 'Friday') {
            price = 8.45;
        } else if (weekDay == 'Saturday'){
            price = 9.80;
        } else if (weekDay == 'Sunday'){
            price = 10.46;
        }
        if (groupSize >= 30) {
            price *= 0.85;
        }
    } else if (groupType == 'Business') {
        if (weekDay == 'Friday') {
            price = 10.90;
        } else if (weekDay == 'Saturday'){
            price = 15.60;
        } else if (weekDay == 'Sunday'){
            price = 16;
        }
        if (groupSize >= 100) {
            groupSize -= 10;
        }
    }else if (groupType == 'Regular') {
        if (weekDay == 'Friday') {
            price = 15;
        } else if (weekDay == 'Saturday'){
            price = 20;
        } else if (weekDay == 'Sunday'){
            price = 22.50;
        }
        if (groupSize >= 10 && groupSize <= 20) {
            price *= 0.95;
        }
    } 

    let cost = price * groupSize;
    
    console.log(`Total price: ${cost.toFixed(2)}`);
}

vacation(
    30,
    "Students",
    "Sunday"
);
vacation(
    40,
    "Regular",
    "Saturday"
);