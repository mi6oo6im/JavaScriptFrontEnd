const baseURL = 'http://localhost:3030/jsonstore/gifts';

const loadPresentsButtonElement = document.getElementById('load-presents');
const giftListDivElement = document.getElementById('gift-list');
const giftSockDivElement = document.querySelector('#gift-list div.gift-sock')
const addPresentButtonElement = document.getElementById('add-present');
const editPresentButtonElement = document.getElementById('edit-present');
const inputGiftElement = document.getElementById('gift');
const inputForElement = document.getElementById('for');
const inputPriceElement = document.getElementById('price');

loadPresentsButtonElement.addEventListener('click', getGiftSocks);

addPresentButtonElement.addEventListener('click', async () => {
    const giftValue = inputGiftElement.value;
    const forValue = inputForElement.value;
    const priceValue = inputPriceElement.value;

    if (!giftValue || !forValue || !priceValue){
        return;
    }
    
    try {
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'gift': giftValue,
                'for': forValue,
                'price':priceValue,
            })
        });

        if (!response.ok) {
            throw new Error('Gift not added');
        }

        // Clear input fields 
        inputGiftElement.value = '';
        inputForElement.value = '';
        inputPriceElement.value = '';

        // Reload gifts
        await getGiftSocks();
    } catch (error) {
        console.error(error);
    }
});

async function getGiftSocks() {
    try {
        const response = await fetch(baseURL);
        if (!response.ok) {
            throw new Error('No gifts loaded');
        }
        const presents = await response.json();
        
        giftListDivElement.innerHTML = '';
        
        for (const giftKey in presents) {
            let {_id, gift, for: giftFor, price } = presents[giftKey];
            const newGiftSockDivElement = giftSockDivElement.cloneNode(true)
            const currentGiftNameElement = newGiftSockDivElement.querySelector('.content p:nth-child(1)');
            const currentGiftRecipientElement = newGiftSockDivElement.querySelector('.content p:nth-child(2)');
            const currentGiftPriceElement = newGiftSockDivElement.querySelector('.content p:nth-child(3)');
            currentGiftNameElement.textContent = gift;
            currentGiftRecipientElement.textContent = giftFor;
            currentGiftPriceElement.textContent = price;
            newGiftSockDivElement.setAttribute('data-id', _id);
            giftListDivElement.appendChild(newGiftSockDivElement);
        
        
        }
    } catch (error) {
        console.error(error);
    }
    
}