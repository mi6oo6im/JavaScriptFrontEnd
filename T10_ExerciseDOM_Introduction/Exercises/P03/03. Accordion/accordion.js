function toggle() {
    const buttonElement = document.querySelector('.button');
    const hiddenElement = document.getElementById('extra');

    if (buttonElement.textContent == 'More'){
        buttonElement.textContent = 'Less';
        hiddenElement.style.display = 'block';
    } else {
        buttonElement.textContent = 'More';
        hiddenElement.style.display = 'none';
    }
}