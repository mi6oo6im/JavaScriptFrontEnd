function solve(namesArr) {
    let resultArr = [];
    const orderedNamesArr = namesArr.sort((a,b) => a.localeCompare(b));
    // for (let i = 0; i < orderedNamesArr.length; i++) {
    //     resultArr.push(`${i + 1}.${orderedNamesArr[i]}`);
    // }
    orderedNamesArr.forEach((element, index) => resultArr.push(`${index + 1}.${element}`));
    console.log(resultArr.join('\n'));
}

solve(["John", "Bob", "Christina", "Ema"])