function colorize() {
    const elementsToColorize = document.querySelectorAll('tr:nth-of-type(2n)');
    for (const element of elementsToColorize) {
        element.style.backgroundColor = 'Teal'
    }
}