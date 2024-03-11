function solve(actionArr) {
    let cleanPercent = 0;
    const soapFunc = x => x += 10;
    const waterFunc = x => x *= 1.2;
    const vacumFunc = x => x *= 1.25;
    const mudFunc = x => x *= 0.9;

    const commands = {
        soap : soapFunc,
        water : waterFunc,
        'vacuum cleaner' : vacumFunc,
        mud : mudFunc
    }

    
    for (const command of actionArr) {
        cleanPercent = commands[command](cleanPercent);
    }

    console.log(`The car is ${cleanPercent.toFixed(2)}% clean.`);
}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
console.log('------------');
solve(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
console.log('------------');