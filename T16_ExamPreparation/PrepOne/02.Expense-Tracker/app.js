window.addEventListener("load", solve);

function solve() {
    
    const expenceTypeInputElement = document.getElementById('expense');
    const amountInputElement = document.getElementById('amount');
    const dateInputElement = document.getElementById('date');
    const addButtonElement = document.getElementById('add-btn');
    const previewListElement = document.getElementById('preview-list');
    const deleteButtonElement = document.querySelector('.btn.delete');
    const okListElement = document.getElementById('expenses-list');
    
    addButtonElement.addEventListener('click', () => {
        const ExpenceTypeValue = expenceTypeInputElement.value;
        const AmountValue = amountInputElement.value;
        const DateValue = dateInputElement.value;
        
        if (!ExpenceTypeValue || !AmountValue || !DateValue){
            return;
        }

        const ExpenceTypeParagraphElement = document.createElement('p');
        ExpenceTypeParagraphElement.textContent = `Type: ${ExpenceTypeValue}`;
        const AmountParagraphElement = document.createElement('p');
        AmountParagraphElement.textContent = `Amount: ${AmountValue}$`;
        const DateParagraphElement = document.createElement('p');
        DateParagraphElement.textContent = `Date: ${DateValue}`;
        
        const articleElement = document.createElement('article');
        articleElement.appendChild(ExpenceTypeParagraphElement);
        articleElement.appendChild(AmountParagraphElement);
        articleElement.appendChild(DateParagraphElement);
        const expenceListElement = document.createElement('li');
        expenceListElement.classList.add('expense-item')
        expenceListElement.appendChild(articleElement);

        expenceTypeInputElement.value = '';
        amountInputElement.value = '';
        dateInputElement.value = '';
        console.log('test');

        const buttonsContainerElement = document.createElement('div');
        buttonsContainerElement.classList.add('buttons');
        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('btn', 'edit');
        editButtonElement.textContent = 'edit';
        
        const okButtonElement = document.createElement('button');
        okButtonElement.classList.add('btn', 'ok');
        okButtonElement.textContent = 'ok';

        buttonsContainerElement.appendChild(editButtonElement);
        buttonsContainerElement.appendChild(okButtonElement);
        expenceListElement.appendChild(buttonsContainerElement);

        previewListElement.appendChild(expenceListElement);


        addButtonElement.setAttribute('disabled', 'disabled');

        // ---------------------- end of task 1

        editButtonElement.addEventListener('click', () => {
            const currentExpenceType = ExpenceTypeValue;
            const currentAmount = AmountValue;
            const currentDate = DateValue;
            
            expenceTypeInputElement.value = currentExpenceType;
            amountInputElement.value = currentAmount;
            dateInputElement.value = currentDate;
            
            expenceListElement.innerHTML = '';

            addButtonElement.removeAttribute('disabled');
        })
        // ---------------------- end of task 2

        okButtonElement.addEventListener('click', () => {
            okListElement.appendChild(expenceListElement);
            expenceListElement.removeChild(buttonsContainerElement);

            addButtonElement.removeAttribute('disabled');
        })
        // ---------------------- end of task 3
    }
    
)

deleteButtonElement.addEventListener('click', () => {

    window.location.reload();
    // ---------------------- end of task 3
} )





}