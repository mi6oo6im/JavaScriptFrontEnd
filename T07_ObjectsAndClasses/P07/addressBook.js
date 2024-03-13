function solve(strArr) {
    const addressMatrix = [];
    for (const record of strArr) {
        addressMatrix.push(record.split(':'));
    }

    const addressesObj = Object.fromEntries(addressMatrix);

    const sortedArr = Object.entries(addressesObj).sort((a, b) => a[0].localeCompare(b[0]));

    for (const record of sortedArr) {
        console.log(`${record[0]} -> ${record[1]}`);
    }
}

solve(['Tim:Doe Crossing', 
'Bill:Nelson Place', 
'Peter:Carlyle Ave', 
'Bill:Ornery Rd']);
console.log('--------------');
solve(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);
console.log('--------------');