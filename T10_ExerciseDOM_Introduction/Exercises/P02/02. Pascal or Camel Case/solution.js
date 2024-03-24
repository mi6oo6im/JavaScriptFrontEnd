function solve() {
    const text = document.getElementById('text').value;
    const namingConvention = document.getElementById('naming-convention').value;
    const resultElement = document.getElementById('result');

   


    const convertersMap = {
        'Pascal Case' : text => text
        .split(' ')
        .map(word =>  word[0].toUpperCase() + word.toLowerCase().slice(1))
        .join(''),
        'Camel Case' : text => {
            const result =  text
            .split(' ')
            .map(word =>  word[0].toUpperCase() + word.toLowerCase().slice(1))
            .join('');
            return result[0].toLowerCase() + result.slice(1);
        }
    }

    if (!convertersMap.hasOwnProperty(namingConvention)){
        resultElement.textContent = 'Error!';
    } else {
        resultElement.textContent = convertersMap[namingConvention](text);
    }
}