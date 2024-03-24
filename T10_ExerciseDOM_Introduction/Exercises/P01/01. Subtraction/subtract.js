function subtract() {
    const firstNumElement = document.getElementById('firstNumber');
    const secondNumElement = document.getElementById('secondNumber');
    const resultNumElement = document.getElementById('result');
    resultNumElement.textContent = firstNumElement.value - secondNumElement.value
}