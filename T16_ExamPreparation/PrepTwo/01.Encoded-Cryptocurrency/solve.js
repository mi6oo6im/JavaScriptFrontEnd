function solve(inputArr) {
    let message = inputArr.shift();
    
    let commandLine = inputArr.shift();

    let isError = false;

    const takeEven = (message) => {
        return message
            .split('')
            .filter((_, i) => i % 2 === 0)
            .join('');
    };
    const changeAll = (message, substring, replacement) => {
        return message.split(substring).join(replacement);
    };
    const reverse = (message, substring) => {
        if (!message.includes(substring)){
            isError = true;
            console.log("error");
            return message
        } else {
            message = message.replace(substring, '');
            return message += substring.split('').reverse().join('');
        }
    };

    

    while (commandLine !== "Buy") {
        let [command, ...args] = commandLine.split('?');
        switch (command) {
            case 'TakeEven':
                message = takeEven(message)
                break;
            case 'ChangeAll':
                let [substring, replacement] = args;
                message = changeAll(message, substring, replacement);
                break;
            case 'Reverse':
                message = reverse(message, ...args);
                break;
        }

        if (!isError){
            console.log(message);
        } else {
            isError = false;
        }

        commandLine = inputArr.shift();
    }

    console.log(`The cryptocurrency is: ${message}`);
}

solve(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",

"TakeEven",

"Reverse?!nzahc",

"ChangeAll?m?g",

"Reverse?adshk",

"ChangeAll?z?i",

"Buy"]);