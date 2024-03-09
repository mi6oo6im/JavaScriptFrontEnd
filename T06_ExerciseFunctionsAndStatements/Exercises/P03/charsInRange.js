function solve(char1, char2) {
    function getCharChain(char1, char2) {
        const stringArr = [];
        if (char1.charCodeAt() > char2.charCodeAt()){
            char1 = [char2, char2 = char1][0];
        }
        for (let i = char1.charCodeAt() + 1; i < char2.charCodeAt(); i++) {
            const element = String.fromCharCode(i);
            stringArr.push(element);
        }
        return stringArr;
    }
    console.log(getCharChain(char1, char2).join(' '));
}

solve('a', 'd');
console.log('----------------');
solve('#', ':');
console.log('----------------');
solve('C', '#');
console.log('----------------');