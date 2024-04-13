window.addEventListener("load", solve);

function solve() {
    const inputNameElement = document.getElementById('name');
    const inputNumberElement = document.getElementById('phone');
    const inputCategoryElement = document.getElementById('category');
    const addButtonElement = document.getElementById('add-btn');
    const contactListUlElement = document.getElementById('contact-list');
    const checkUlElement = document.getElementById('check-list');
    addButtonElement.addEventListener('click', addNewContact);
    
    function addNewContact() {
        const contactLiElement = document.createElement('li');
        const name = inputNameElement.value;
        const number = inputNumberElement.value;
        const category = inputCategoryElement.value;
        const newNamePElement = document.createElement('p');
        newNamePElement.setAttribute('data-type', 'name');
        newNamePElement.setAttribute('data-value', name);
        newNamePElement.textContent = 'name:' + name;
        const newPhonePElement = document.createElement('p');
        newPhonePElement.setAttribute('data-type', 'phone');
        newPhonePElement.setAttribute('data-value', number);
        newPhonePElement.textContent = 'phone:'+ number;
        const newCategoryPElement = document.createElement('p');
        newCategoryPElement.setAttribute('data-type', 'category');
        newCategoryPElement.setAttribute('data-value', category);
        newCategoryPElement.textContent = 'category:' + category;
        newContactArticleElement = document.createElement('article');
        newContactArticleElement.appendChild(newNamePElement);
        newContactArticleElement.appendChild(newPhonePElement);
        newContactArticleElement.appendChild(newCategoryPElement);
        // create buttons
        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('edit-btn');
        editButtonElement.addEventListener('click', editContact);
        const saveButtonElement = document.createElement('button');
        saveButtonElement.classList.add('save-btn');
        saveButtonElement.addEventListener('click', (e) => saveContact(e, contactLiElement));
        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons');
        buttonsDivElement.appendChild(editButtonElement);
        buttonsDivElement.appendChild(saveButtonElement);
        // create li element and append article and buttons
        contactLiElement.appendChild(newContactArticleElement);
        contactLiElement.appendChild(buttonsDivElement);
        // append li to ul
        checkUlElement.appendChild(contactLiElement);

        inputNameElement.value = '';
        inputNumberElement.value = '';
        inputCategoryElement.value = '';   
    }
    
    function editContact() {
        const currentContactToEditNameElement = document.querySelector('[data-type = name]');
        const currentContactToEditPhoneElement = document.querySelector('[data-type = phone]');
        const currentContactToEditcategoryElement = document.querySelector('[data-type = category]');
        const name = currentContactToEditNameElement.getAttribute('data-value');
        const number = currentContactToEditPhoneElement.getAttribute('data-value');
        const category = currentContactToEditcategoryElement.getAttribute('data-value');

        inputNameElement.value = name;
        inputNumberElement.value = number;
        inputCategoryElement.value = category;
        // remove from check element ul
        checkUlElement.innerHTML = '';
    }

    function saveContact(e, contactLiElement) {
        const deleteContactButtonElement = document.createElement('button');
        deleteContactButtonElement.classList.add('del-btn');
        contactListUlElement.appendChild(contactLiElement);
        const buttonsDivElement = contactLiElement.querySelector('.buttons');
        contactLiElement.removeChild(buttonsDivElement);
        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('del-btn');
        deleteButtonElement.addEventListener('click', (e) => deleteContact(e, contactLiElement))
        contactLiElement.appendChild(deleteButtonElement)
    }

    function deleteContact(e, contactLiElement) {
        contactLiElement.remove();
    }
}
  