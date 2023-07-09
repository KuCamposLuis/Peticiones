
function getMercadoLibreData() {
  fetch("https://api.mercadolibre.com/sites/MLA/search?q=ordenadores")
    .then(response => response.json())
    .then(data => {
      const itemsList = document.getElementById("items-list");
      itemsList.innerHTML = ""; 

      
      data.results.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item.title;
        itemsList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error("Error al obtener los datos de MercadoLibre:", error);
    });
}


function getPokemonData() {
    const pokemonList = ["ditto", "pikachu", "charizard"];
  
    const pokemonDetails = document.getElementById("pokemon-details");
    pokemonDetails.innerHTML = ""; 
  
   
    pokemonList.forEach(pokemonName => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
        
          const pokemonItem = document.createElement("li");
          pokemonItem.textContent = `Name: ${data.name}, Height: ${data.height}, Weight: ${data.weight}`;
          pokemonDetails.appendChild(pokemonItem);
        })
        .catch(error => {
          console.error("Error al obtener los datos de PokéAPI:", error);
        });
    });
  }

const mercadoLibreButton = document.getElementById("mercado-libre-button");
const pokemonButton = document.getElementById("pokemon-button");


mercadoLibreButton.addEventListener("click", getMercadoLibreData);
pokemonButton.addEventListener("click", getPokemonData);
