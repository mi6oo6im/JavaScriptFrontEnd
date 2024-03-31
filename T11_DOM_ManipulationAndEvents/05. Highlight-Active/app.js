function focused() {
    const sectionsElements = Array.from(document.querySelectorAll('div > div'));
    for (const element of sectionsElements) {
        element.children[1].addEventListener('focus', () => {
            element.classList.add('focused');
        })
        element.children[1].addEventListener('blur', () => {
            element.classList.remove('focused');
        })
    }
}