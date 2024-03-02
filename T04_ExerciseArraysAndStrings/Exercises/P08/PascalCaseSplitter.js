function solve(textStr) {
    const result = textStr
    .split(/(?=[A-Z])/gm)
    .join(', ')
    console.log(result);
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log('-------------------------');
solve('HoldTheDoor');
console.log('-------------------------');
solve('ThisIsSoAnnoyingToDo');
console.log('-------------------------');