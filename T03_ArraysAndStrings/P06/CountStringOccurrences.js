function solve(textStr, wordStr) {
    let wordCounter = 0;
    
    let textArr = textStr.split(' ');

    for (const word of textArr) {
        if (word === wordStr) {
            wordCounter++;
        }
    }
    console.log(wordCounter);
}
solve('This is a word and it also is a sentence', 'is')
solve('softuni is great place for learning new programming languages', 'softuni')