const url = 'https://swapi.dev/api';

fetch(`${url}/people/1`)
    .then(response => response.json())
    .then(data => {
        const dataElement = document.createElement('div');
        dataElement.textContent = JSON.stringify(data);
        document.querySelector('body').appendChild(dataElement);
    })
    .catch((err) => console.log(err));