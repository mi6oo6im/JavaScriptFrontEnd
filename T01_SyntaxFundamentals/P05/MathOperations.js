function mathOperations(fNum, sNum, operator) {
        switch (operator) {
            case '+': console.log(fNum + sNum);

                break;
            case '-': console.log(fNum - sNum);
            
                break;
            case '*': console.log(fNum * sNum);
            
                break;
            case '/': console.log(fNum / sNum);
            
                break;
            case '%': console.log(fNum % sNum);
            
                break;
            case '**': console.log(fNum ** sNum);
            
                break;
        
            default: console.log('error!');
                break;
        }
}

mathOperations(5, 6, '+')
mathOperations(3, 5.5, '*')