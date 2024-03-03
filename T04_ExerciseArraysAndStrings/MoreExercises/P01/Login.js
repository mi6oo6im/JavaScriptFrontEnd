function solve(stringArr) {
    const [username, ...attempts] = stringArr;
    const password = username
                    .split('')
                    .reverse()
                    .join('');

    for (let i = 0; i < 4; i++){
        if (attempts[i] === password){
            return console.log(`User ${username} logged in.`);
        } 
        i < 3 ? console.log('Incorrect password. Try again.') : console.log(`User ${username} blocked!`);
    }
}

solve(['Acer','login','go','let me in','recA']);
console.log('-------------------------');
solve(['momo','omom']);
console.log('-------------------------');
solve(['sunny','rainy','cloudy','sunny','not sunny']);
console.log('-------------------------');