function solve(textStr, startIndex, elementCount) {
    const newStr = textStr.substring(startIndex, startIndex + elementCount)

    console.log(newStr);
}
solve('ASentence', 1, 8);
solve('SkipWord', 4, 7);