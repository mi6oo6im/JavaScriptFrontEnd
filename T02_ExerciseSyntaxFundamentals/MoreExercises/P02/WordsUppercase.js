function wordsUpper(textStr) {
    const punctuationRegEx = /\W+/g;
    const extraSpaceRegEx = /\s+/g;
    textStr = textStr.replace(punctuationRegEx,' ');
    textStr = textStr.replace(extraSpaceRegEx,' ');
    textStr = textStr.trim();
    const textArr = textStr.split(' ');
    const newTextStr = textArr.join(', ');
    console.log(newTextStr.toUpperCase());
}

wordsUpper('Hi, how are you?')
wordsUpper('hello')
wordsUpper('functions in js can be nested i.e. hold other functions!?')