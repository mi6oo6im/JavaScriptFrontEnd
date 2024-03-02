function solve(text, word) {
    let result = text
    .split(word)
    .length

    console.log(result);
}

solve('test is a test');