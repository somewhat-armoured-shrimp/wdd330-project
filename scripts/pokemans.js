import { getPokemonList, pokemonNameList } from "./utilities.mjs";

const currentTeam = [];


// class to create objecstsst????
class Pokeman {
    constructor(slot, pokeName, pokeImg) {
        this.slot = slot;
        this.pokeName = pokeName;
        this.pokeImg = pokeImg;
    }
}

async function addPokeymone(slot) {
    const input = document.querySelector(`#slot-${slot}`);
    const name = document.querySelector(`#pokeName-${slot}`);
    console.log(input);

    if (pokemonNameList.includes(input.value)) {
        const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${input.value}`;
        try {
            const response = await fetch(pokemonURL);
            if (response.ok) {
                const data = await response.json();
                nameAndImage(slot, input.value, data.sprites.front_default);
                console.log(`${input.value}:`, data.sprites.front_default);

            } else {
                throw new Error(await response.text());
            }
        } catch (error) {
            console.error(`didn't fetch ${name}, rip`);
        }
    }

}

function deletePokeymone(slot) {
    const input = document.querySelector(`#slot-${slot}`);
    const name = document.querySelector(`#pokeName-${slot}`);

    
}

function updateSlot() {
    const updateButton = document.querySelectorAll('.update-button');
    updateButton.forEach(update => {
        update.addEventListener('click', (evt) => {
            const slot = Number(evt.target.id.slice('update-'.length));
            addPokeymone(slot);
        });
    });
}

function removeFromSlot() {
    const deleteButton = document.querySelectorAll('.delete-button');
    deleteButton.forEach(deleterThing => {
        deleterThing.addEventListener('click', () => {

        });
    })
}
// its all just one save ghghghgbvnc thats fine AIMING FOR 69% D+ BAYBEEE
function save() {
    const saveButton = document.querySelector('#save-button');
    saveButton.addEventListener('click', () => {
        document.querySelector('#insert-name');
        localStorage.setItem('pokemonTeam', JSON.stringify(currentTeam));
        console.log(currentTeam);
    });
}

// could not physically bring myself to do anything else dynamically
function nameAndImage(slot, name, img) {
    const nameElement = document.querySelector(`#pokeName-${slot}`);
    const imageBox = document.querySelector(`#img-container-${slot}`);

    nameElement.innerHTML = `${name}`;

    imageBox.innerHTML = `<img src="${img}" alt="${name}'s sprite"
                        width="120" height="120">`;

    // this is where it gets yucky ok
    const newMon = new Pokeman(slot, name, img);
                        
    currentTeam.push(newMon);

    console.log(currentTeam);

    document.querySelector(`#s${slot}`).classList.add('meth');

}

// ya kjust put it in global whatever
updateSlot();
save();
getPokemonList();
