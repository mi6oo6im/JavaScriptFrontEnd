function solve(inputArr) {
    const gunslayersCount = inputArr.shift();
    const gunslayersObj = {};

    for (let i = 0; i < gunslayersCount; i++){
        let [name, healthPoints, bullets] = inputArr.shift().split(' ');
        gunslayersObj[name] = {healthPoints: Number(healthPoints), bullets: Number(bullets)};
    }

    let commandline = inputArr.shift();

    while (commandline !== 'Ride Off Into Sunset') {
        let [command, name, ...args] = commandline.split(' - ');

        switch (command) {
            case 'FireShot':
                const target = args[0];

                if (gunslayersObj[name]['bullets'] > 0){
                    gunslayersObj[name]['bullets'] -= 1;
                    console.log(`${name} has successfully hit ${target} and now has ${gunslayersObj[name]['bullets']} bullets!`);
                } else {
                    console.log(`${name} doesn't have enough bullets to shoot at ${target}!`);
                }
                break;
            case 'TakeHit':
                let [damage, attacker] = args;

                gunslayersObj[name]['healthPoints'] -= Number(damage);

                if (gunslayersObj[name]['healthPoints'] > 0){
                    console.log(`${name} took a hit for ${damage} HP from ${attacker} and now has ${gunslayersObj[name]['healthPoints']} HP!`);
                } else {
                    delete gunslayersObj[name];
                    console.log(`${name} was gunned down by ${attacker}!`);
                }

                break;
            case 'Reload':
                if (gunslayersObj[name]['bullets'] < 6){
                    let reloadedBullets = 6 - gunslayersObj[name]['bullets'];
                    gunslayersObj[name]['bullets'] = 6;
                    console.log(`${name} reloaded ${reloadedBullets} bullets!`);
                } else {
                    console.log(`${name}'s pistol is fully loaded!`);
                }
                break;
            case 'PatchUp':
                let amount = Number(args[0]);
                if (gunslayersObj[name]['healthPoints'] < 100){
                    if ((gunslayersObj[name]['healthPoints'] + amount) >= 100){
                        amount = 100 - gunslayersObj[name]['healthPoints'];
                        gunslayersObj[name]['healthPoints'] = 100;
                    } else {
                        gunslayersObj[name]['healthPoints'] += amount;
                    }
                    console.log(`${name} patched up and recovered ${amount} HP!`);
                } else {
                    console.log(`${name} is in full health!`);
                }

                break;
        }
        commandline = inputArr.shift();
    }
    for (const gunner in gunslayersObj) {
        console.log(gunner);
        console.log(` HP: ${gunslayersObj[gunner].healthPoints}`);
        console.log(` Bullets: ${gunslayersObj[gunner].bullets}`);
    }
}

solve(["2",
"Gus 100 0",
"Walt 20 6",
"FireShot - Gus - Bandit",
"TakeHit - Gus - 100 - Bandit",
"Reload - Walt",
"PatchUp - Walt - 20",
"Ride Off Into Sunset"]);    