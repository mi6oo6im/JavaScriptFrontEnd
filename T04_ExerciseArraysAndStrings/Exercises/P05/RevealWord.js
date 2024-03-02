function solve(wordsStr, textStr) {
    let wordsToReplaceArr = wordsStr.split(', ');
    let textArr = textStr.split(' ');
    
    let revealedText = textArr.map(word => {if(word.startsWith('*')){
        word = wordsToReplaceArr.find(element => element.length == word.length);
        } 
        return word;
    }
    )
    console.log(revealedText.join(' '));
}

solve('great',
'softuni is ***** place for learning new programming languages'),
console.log('-------------------------------------');
solve('great, learning',
'softuni is ***** place for ******** new programming languages');