function solve(inputArr) {
    const citiesArr = [];

    for (const record of inputArr) {
        const [name, latitude, longitude] = record.split(' | ');
        const townArr = [['town', name], ['latitude', Number(latitude).toFixed(2)], ['longitude', Number(longitude).toFixed(2)]];
        const currentObj = Object.fromEntries(townArr);
        citiesArr.push(currentObj);
    }

    for (const obj of citiesArr) {
        console.log(obj);
    };
}

solve(
    ['Sofia | 42.696552 | 23.32601',
     'Beijing | 39.913818 | 116.363625']
)