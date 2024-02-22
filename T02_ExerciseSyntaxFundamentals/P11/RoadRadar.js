function roadRadar(speed, area) {
    const speedLimits = {motorway: 130, interstate: 90, city: 50, residential: 20}
    const limit = speedLimits[area];
    const speedDelta = speed - limit;
    let status = null;
    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        if (speedDelta <= 20){
            status = 'speeding';
        } else if (speedDelta <= 40){
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${speedDelta} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');