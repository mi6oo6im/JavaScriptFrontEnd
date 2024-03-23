function extract(content) {
    const textNode = document.getElementById(content).textContent;
    console.log(textNode);
    const variableText = Array.from(textNode
    .matchAll(/\(([a-zA-Z ]+)\)/g))
    .map(match => match[1])
    .join('; ');
    return variableText;
}