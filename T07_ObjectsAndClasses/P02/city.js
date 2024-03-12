function solve(object) {
    let result = [];
    for (let key of Object.keys(object)){
        result.push(`${key} -> ${object[key]}`);
    }

    console.log(result.join('\n'));
}

function fancySolve(object) {
    for (const key in object) {
        console.log(`${key} -> ${object[key]}`);
    }
}

fancySolve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria", 
    postCode: "1000" })