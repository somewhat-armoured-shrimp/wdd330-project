export const pokemonNameList = [];

export async function getPokemonList() {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=2000&offset=0';
    const pokemonList = document.querySelector('#choose-pokemon');

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            data.results.forEach(mon => {
                pokemonNameList.push(mon.name);
                const option = document.createElement('option');
                option.value = mon.name;
                pokemonList.appendChild(option);

            });

        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}