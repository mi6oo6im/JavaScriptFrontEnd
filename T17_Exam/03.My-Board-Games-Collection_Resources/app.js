const baseUrl = 'http://localhost:3030/jsonstore/games';

const gamesListDivElement = document.getElementById('games-list');
const loadGamesButtonElement = document.getElementById('load-games');
const addGameButtonElement = document.getElementById('add-game');
const editGameButtonElement = document.getElementById('edit-game');
const nameInputElement = document.getElementById('g-name');
const typeInputElement = document.getElementById('type');
const playersInputElement = document.getElementById('players');
const formContainerElement = document.querySelector('form');


loadGamesButtonElement.addEventListener('click', loadGames);

addGameButtonElement.addEventListener('click', addGame);

editGameButtonElement.addEventListener('click', editGame)

async function loadGames() {
    const response = await fetch(baseUrl);
    const gamesResult = await response.json();

    gamesListDivElement.innerHTML = '';

    const gamesListFragment = document.createDocumentFragment();

    Object
        .values(gamesResult)
        .forEach(game => {
            gamesListFragment.appendChild(createGameElement(game));
        })

    gamesListDivElement.appendChild(gamesListFragment);
}

function createGameElement(game) {
    const changeButtonElement = document.createElement('button');
    changeButtonElement.classList.add('change-btn');
    changeButtonElement.textContent = 'Change';
    changeButtonElement.addEventListener('click', (e) => changeGame(e, game));

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete-btn');
    deleteButtonElement.textContent = 'Delete';
    deleteButtonElement.addEventListener('click', (e) => deleteGame(e));

    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.classList.add('buttons-container');
    buttonsDivElement.appendChild(changeButtonElement);
    buttonsDivElement.appendChild(deleteButtonElement);

    const gameNamePElement = document.createElement('p');
    gameNamePElement.textContent = game.name;

    const gameTypePElement = document.createElement('p');
    gameTypePElement.textContent = game.type;

    const playersPElement = document.createElement('p');
    playersPElement.textContent = game.players;

    const contentDivElement = document.createElement('div');
    contentDivElement.classList.add('content');
    contentDivElement.appendChild(gameNamePElement);
    contentDivElement.appendChild(gameTypePElement);
    contentDivElement.appendChild(playersPElement);

    const gameDivElement = document.createElement('div');
    gameDivElement.classList.add('board-game');
    gameDivElement.appendChild(contentDivElement);
    gameDivElement.appendChild(buttonsDivElement);

    gameDivElement.setAttribute('data-id', game._id);

    return gameDivElement;
}

function changeGame(e, game) {
    const gameElement = e.currentTarget.parentElement.parentElement;
    gameElement.remove();

    nameInputElement.value = game.name;
    typeInputElement.value = game.type;
    playersInputElement.value = game.players;

    formContainerElement.setAttribute('data-id', game._id);

    // activate edit button
    editGameButtonElement.removeAttribute('disabled');

    // decativate create button
    addGameButtonElement.setAttribute('disabled', 'disabled');
}

function addGame(){

    const game = getInputData();

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(game)
    })
        .then(res => {
            if (!res.ok) {
                return;
            }

            // clear input fields
            clearInputFields();

            // fetch presents
            return loadGames();
        });
}

function editGame() {
    const game = getInputData();

    const gameId = formContainerElement.getAttribute('data-id');

    formContainerElement.removeAttribute('data-id');

    fetch(`${baseUrl}/${gameId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: gameId, ...game }),
    })
        .then(res => {
            if (!res.ok) {
                return;
            }

        loadGames();

        editGameButtonElement.setAttribute('disabled', 'disabled');

        addGameButtonElement.removeAttribute('disabled');

        clearInputFields();
        });
}

function deleteGame(e) {
    const gameElement = e.currentTarget.parentElement.parentElement;
    gameId = gameElement.getAttribute('data-id');

    fetch(`${baseUrl}/${gameId}`, {
        method: 'DELETE',
    })
        .then(res => {
            if (!res.ok) {
                return;
            }
            
            // remove from giftlist
            gameElement.remove();
        });
}

function clearInputFields() {
    nameInputElement.value = '';
    typeInputElement.value = '';
    playersInputElement.value = '';
}

function getInputData() {
    return {
        name: nameInputElement.value,
        type: typeInputElement.value,
        players: playersInputElement.value
    }
};
