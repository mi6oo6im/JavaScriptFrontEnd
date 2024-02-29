function solve(namesArr) {
    let resultArr = [];
    const orderedNamesArr = namesArr.sort();
    for (let i = 0; i < orderedNamesArr.length; i++) {
        resultArr.push(`${i + 1}.${orderedNamesArr[i]}`);
    }
    console.log(resultArr.join('\n'));
}

solve(["John", "Bob", "Christina", "Ema"])