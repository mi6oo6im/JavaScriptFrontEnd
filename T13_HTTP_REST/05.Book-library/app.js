function attachEvents() {
    const titleInputElement = document.querySelector('input[name=title]');
    const authorInputElement = document.querySelector('input[name=author]');
    const submitButtonElement = document.querySelector('#form button');
    const booksTableElement = document.querySelector('#books-table tbody')
    submitButtonElement.addEventListener('click', (e) => {
        const titleString = titleInputElement.value;
        const authorString = authorInputElement.value;
        const bookTrElement = createBookElement(titleString, authorString);
        
        booksTableElement.appendChild(bookTrElement);
        
        titleInputElement.value = '';
        authorInputElement.value = '';
    })
}

function createBookElement(title, author) {
    const editButtonElement = document.createElement('button');
    editButtonElement.textContent = 'Edit';
    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.textContent = 'Delete';

    const buttonsTdElement = document.createElement('td');
    buttonsTdElement.appendChild(editButtonElement);
    buttonsTdElement.appendChild(deleteButtonElement);

    const titleTdElement = document.createElement('td');
    titleTdElement.textContent = title;
    
    const authorTdElement = document.createElement('td');
    authorTdElement.textContent = author;

    const bookTrElement = document.createElement('tr');
    bookTrElement.appendChild(titleTdElement);
    bookTrElement.appendChild(authorTdElement);
    bookTrElement.appendChild(buttonsTdElement);

    return bookTrElement;
}

attachEvents();