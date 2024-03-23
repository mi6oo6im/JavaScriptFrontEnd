function extractText() {
    const elementsCollection = Array.from(document.querySelectorAll('#items > li'));
    const resultElement = document.getElementById('result')
    const result = elementsCollection.reduce((acc, el) => acc += `\n${el.textContent}`, '').trim();
    resultElement.value = result;
}