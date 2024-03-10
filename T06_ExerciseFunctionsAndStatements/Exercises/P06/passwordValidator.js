function solve(passStr) {
    function isValidLength(str) {
        if (str.length >= 6 && str.length <= 10) {
            return true;
        }

        console.log("Password must be between 6 and 10 characters");

        return false;
    }

    function isValidAlphaNum(str) {
        const regex = /^[a-zA-Z0-9]*$/
        if (regex.test(str)) {
            return true;
        }

        console.log('Password must consist only of letters and digits');
        return false;
    }

    function isValidTwoDigits(str) {
        const regex = /\d{1}/g
        const matchesArr = str.match(regex);
        if (matchesArr && matchesArr.length >= 2) {
            return true;
        }

        console.log("Password must have at least 2 digits");
        return false;
    }

    const isValidLengthBul = isValidLength(passStr);
    const isValidAlphaNumBul = isValidAlphaNum(passStr);
    const isValidTwoDigitsBul = isValidTwoDigits(passStr);


    if (isValidLengthBul && isValidAlphaNumBul && isValidTwoDigitsBul){
        console.log("Password is valid");
    }
}

solve('logIn');
console.log('--------------');
solve('MyPass123');
console.log('--------------');
solve('Pa$s$s');
console.log('--------------');
