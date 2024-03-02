function solve(subString, textString) {
    const template = new RegExp(`\\b${subString}\\b`, 'gim')
    if (template.test(textString)){
        console.log(subString);
    } else {
        console.log(`${subString} not found!`);
    }
}

solve('javascript',
'JavaScript is the best programming language');
console.log('-----------------------');
solve('python',
'JavaScript is the best programming language');