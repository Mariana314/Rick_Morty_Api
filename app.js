const url = 'https://rickandmortyapi.com/api/character';
let allCharacters = [];

function makeCharacter(card) {
    const container = document.createElement('div');
    container.classList.add('card');

    const imgCard = document.createElement('img');
    imgCard.src = card.image;
    imgCard.alt = card.name;

    const containerTitle = document.createElement('div');
    containerTitle.classList.add('container-titles');

    const nameCard = document.createElement('h2');
    nameCard.textContent = card.name;

    const statusCard = document.createElement('h3');
    statusCard.textContent = "Status: " + card.status;

    const specieCard = document.createElement('h4');
    specieCard.textContent = "Specie: " + card.species;

    container.appendChild(imgCard);
    containerTitle.appendChild(nameCard);
    containerTitle.appendChild(statusCard);
    containerTitle.appendChild(specieCard);
    container.appendChild(containerTitle);

    document.querySelector('main').appendChild(container);
}

const getCharacter = async (URL) => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        allCharacters = data.results;
        displayCharacters(allCharacters);
    } catch (error) {
        console.log("Error al obtener los personajes: " + error);
    }
};

getCharacter(url);

function displayCharacters(characters) {
    const main = document.querySelector('main');
    main.innerHTML = '';
    characters.forEach(character => makeCharacter(character));
}

const searchInput = document.getElementById('search');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCharacters = allCharacters.filter(character => 
        character.name.toLowerCase().includes(searchTerm)
    );
    displayCharacters(filteredCharacters);
});
