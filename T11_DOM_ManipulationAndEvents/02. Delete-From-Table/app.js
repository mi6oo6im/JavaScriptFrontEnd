function deleteByEmail() {
    const trElements = document.querySelectorAll('table#customers tbody tr');
    const emailInputElement = document.querySelector('input[name=email]');
    const resultElement = document.getElementById('result');
    const rowElementToDelete = Array
        .from(trElements)
        .find(element => element.children[1].textContent.includes(emailInputElement.value));
    
    if (rowElementToDelete){
    rowElementToDelete.remove();
    emailInputElement.value = ''
    resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.'
    }

}