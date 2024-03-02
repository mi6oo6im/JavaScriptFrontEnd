function solve(textString) {
    const template = /#(\w+)/g;
    const templateIsAlpha = /^[a-zA-Z]+$/
    const words = [...textString.matchAll(template)];
    for (const word of words) {
        if (templateIsAlpha.test(word[1])){
            console.log(word[1])
        }
    }
}

solve('Nowadays everyone uses # to tag a #speci1al word in #socialMedia');
console.log('--------------------------');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign')