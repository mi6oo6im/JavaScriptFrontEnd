function sumTable() {
    const numElements = document.querySelectorAll('tr td:last-of-type:not(#sum)');
    const resultElement = document.getElementById('sum')
    const result = Array.from(numElements).reduce((acc, x) => acc + Number(x.textContent), 0);
    resultElement.textContent = result
}