function addItem() {
    const inputElement = document.getElementById('newItemText');
    const itemsListElement = document.getElementById('items');

    const newItemElement = document.createElement('li');
    newItemElement.textContent = inputElement.value;
    itemsListElement.appendChild(newItemElement);

    inputElement.value = ''

}