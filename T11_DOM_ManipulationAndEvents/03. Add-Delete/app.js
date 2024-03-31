function addItem() {
    const inputElement = document.getElementById('newItemText');
    const itemsListElement = document.getElementById('items');
    // create new element and assign value
    const newItemElement = document.createElement('li');
    newItemElement.textContent = inputElement.value;
    // create anchor tag and assign value
    const deleteLinkElement = document.createElement('a');
    deleteLinkElement.textContent = '[Delete]';
    deleteLinkElement.href = '#';
    // append link to list element
    newItemElement.appendChild(deleteLinkElement);
    // append list element to unordered list
    itemsListElement.appendChild(newItemElement);
    // add event handler
    deleteLinkElement.addEventListener('click', () => {
        newItemElement.remove()
    })
    // clear input element value
    inputElement.value = '';
}