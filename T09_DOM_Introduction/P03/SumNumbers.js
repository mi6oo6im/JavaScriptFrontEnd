function calc() {
const firstElementNum = document.getElementById('num1').value;
const secondElementNum = document.getElementById('num2').value;
const resultElement = document.getElementById('sum')
resultElement.value = Number(firstElementNum) + Number(secondElementNum);
}
