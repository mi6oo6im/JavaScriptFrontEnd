function solve(stringArr) {
    const kvpArr = [];
    for (const kvp of stringArr) {
        kvpArr.push(kvp.split(' '));
    }

    const phoneBook = Object.fromEntries(kvpArr);

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

solve(
    ['Tim 0834212554', 
    'Peter 0877547887', 
    'Bill 0896543112', 
    'Tim 0876566344']
)