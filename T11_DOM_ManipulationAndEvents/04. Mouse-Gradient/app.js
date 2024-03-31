function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');
    gradientElement.addEventListener('mousemove', (event) => {
        const currentX = event.offsetX;
        const elementWidth = event.target.clientWidth;
        const progress = Math.floor(currentX / elementWidth * 100);
        resultElement.textContent = `${progress}%`;
        console.log(event);
        console.log(elementWidth);
    })
}