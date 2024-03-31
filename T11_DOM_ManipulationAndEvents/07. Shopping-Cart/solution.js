function solve() {
    const addToCartButtonElements = document.querySelectorAll('button.add-product');
    const checkoutButtonElement = document.querySelector('button.checkout');
    const textareaElement = document.querySelector('textarea');
    
    let totalPrice = 0;
    let productsObject = {};
    
    for (const product of addToCartButtonElements) {
        
        product.addEventListener('click', () => {
            const currentPruductElement = product.parentElement.parentElement;
            const productTitle = currentPruductElement.querySelector('.product-title').textContent;
            const productCost = Number(currentPruductElement.querySelector('.product-line-price').textContent);
            
            textareaElement.value += `Added ${productTitle} for ${productCost.toFixed(2)} to the cart.\n`
            totalPrice += productCost;
            productsObject[productTitle] = true;
        })
    }

    checkoutButtonElement.addEventListener('click', () => {
        const productsList = Object.keys(productsObject).join(', ');
        textareaElement.value += `You bought ${productsList} for ${totalPrice.toFixed(2)}.`;
        for (const button of addToCartButtonElements) {
            button.setAttribute('disabled', 'disabled');
        }
        checkoutButtonElement.setAttribute('disabled', 'disabled')
    })
}