function solve(namesArr) {
    const employeesArr = [];

    for (const name of namesArr) {
        const eNumber = name.length;
        employeesArr.push([name, eNumber]);
        console.log(`Name: ${name} -- Personal Number: ${eNumber}`);
    }
    const employeesObj = Object.fromEntries(employeesArr);
}

solve(
    ['Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
)

console.log('-------------------');
solve(
    ['Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
)