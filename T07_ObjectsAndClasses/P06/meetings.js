function solve(strArr) {
    const meetingsArr = [];
    for (const record of strArr) {
        meetingsArr.push(record.split(' '));
    }
    const meetingsObj = {};

    for (const record of meetingsArr) {
        const day = record[0];
        const person = record[1];

        if (Object.keys(meetingsObj).includes(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetingsObj[day] = person;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const key in meetingsObj) {
        const appDay = key;
        const appPerson = meetingsObj[appDay];
        console.log(`${appDay} -> ${appPerson}`);
        }

}

solve(
    ['Monday Peter',
    'Wednesday Bill', 
    'Monday Tim', 
    'Friday Tim']
)
