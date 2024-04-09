function solve(inputArr) {
    const baristaCount = inputArr.shift();
    const baristasObj = {};
    for (let i = 0; i < baristaCount; i++){
        const currentBarista = inputArr.shift();
        const [name, shift, skills] = currentBarista.split(' ')
        
        baristasObj[name] = {
            "shift": shift,
            "skills": skills.split(','),
        }

    }
    let currentOrder = inputArr.shift();
    
    while (currentOrder !== 'Closed') {
        let [command, name, ...args] = currentOrder.split(' / ');
        currentOrder = inputArr.shift()

        switch (command) {
            case 'Prepare':
                const shift = args[0];
                const coffeeType = args[1];

                if (baristasObj[name]["shift"] === shift &&
                baristasObj[name]["skills"].includes(coffeeType)){
                    console.log(`${name} has prepared a ${coffeeType} for you!`);
                } else{
                    console.log(`${name} is not available to prepare a ${coffeeType}.`);
                }

                break;
            case 'Change Shift':
                const newShift = args[0];
                baristasObj[name]['shift'] = newShift;
                console.log(`${name} has updated his shift to: ${newShift}`);
                break;
            case 'Learn':
                const newCoffeeSkill = args[0];
                if (!baristasObj[name]['skills'].includes(newCoffeeSkill)){
                    baristasObj[name]['skills'].push(newCoffeeSkill);
                    console.log(`${name} has learned a new coffee type: ${newCoffeeSkill}.`);
                } else {
                    console.log(`${name} knows how to make ${newCoffeeSkill}.`);
                }
                break;
            }

        }
        for (const barista in baristasObj) {
            const shift = baristasObj[barista]['shift'];
            const skills = baristasObj[barista]['skills'].join(', ');
            console.log(`Barista: ${barista}, Shift: ${shift}, Drinks: ${skills}`);
        }
}

solve([
    '3',
      'Alice day Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',
      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / night',
      'Learn / Carol / Latte',
      'Learn / Bob / Latte',
      'Prepare / Bob / night / Latte',
      'Closed']
    )