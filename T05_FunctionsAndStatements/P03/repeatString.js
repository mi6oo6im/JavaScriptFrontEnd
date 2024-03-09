function solve(strToRepete, repetitions) {
    function repeater(strToRepete, repetitions) {
        return strToRepete.repeat(repetitions);
    }


    console.log(repeater(strToRepete, repetitions));
}

solve("abc", 3);
console.log('---------------');
solve("String", 2);
console.log('---------------');