function solve(textStr, wordStr) {
    textStr
    while (textStr.includes(wordStr)) {
        textStr = textStr.replace(wordStr, '*'.repeat(wordStr.length))
    }
    console.log(textStr);
}
solve('A small small sentence with some words',
'small');
