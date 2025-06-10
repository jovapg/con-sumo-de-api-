// Función para buscar un Pokémon en la PokeAPI
function buscarPokemon() {
    let nombrePokemon = document.getElementById("pokemonInput").value.toLowerCase();
    let url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

    fetch(url)
        .then(response => response.json()) // Convertimos la respuesta en JSON
        .then(data => mostrarPokemon(data)) // Llamamos a la función para mostrar los datos
        .catch(error => {
            console.error("Error al obtener los datos: ", error);
            document.getElementById("pokemonInfo").innerHTML = "<p style='color: red;'>Pokémon no encontrado</p>";
        });
}

// Función para mostrar la información del Pokémon en la página
function mostrarPokemon(data) {
    let info = `
        <h2>${data.name.toUpperCase()}</h2>
        <img id='pokemonImage' src="${data.sprites.front_default}" alt="Imagen de ${data.name}">
        <p><strong>Altura:</strong> ${data.height / 10} m</p>
        <p><strong>Peso:</strong> ${data.weight / 10} kg</p>
        <p><strong>Habilidades:</strong> ${data.abilities.map(abil => ` ${abil.ability.name}`).join(", ")}</p>
    `;
    
    document.getElementById("pokemonInfo").innerHTML = info;
}

// Función para mostrar una lista de 10 Pokémon sugeridos
function mostrarListaPokemones() {
    let listaPokemones = ["Pikachu", "Charmander", "Squirtle", "Bulbasaur", "Eevee", "Jigglypuff", "Meowth", "Psyduck", "Snorlax", "Gengar"];
    let listaHtml = `<div id="listaContainer" style="margin-top: 20px; padding: 20px; border: 2px solid #ffcc00; border-radius: 10px; background-color: #fff3cd; box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2); display: inline-block; text-align: center;">
                        <h3>Lista de Pokemones</h3>
                        <ul style="list-style: none; padding: 0;">
                    `;
    
    listaPokemones.forEach(pokemon => {
        listaHtml += `<li onclick="seleccionarPokemon('${pokemon}')" style="cursor: pointer; color: blue; margin: 5px 0;">${pokemon}</li>`;
    });
    
    listaHtml += "</ul></div>";
    document.getElementById("listaPokemones").innerHTML = listaHtml;
}

// Función para colocar el nombre del Pokémon en el input de búsqueda
function seleccionarPokemon(nombre) {
    document.getElementById("pokemonInput").value = nombre;
}

// Llamamos a la función para mostrar la lista al cargar la página
document.addEventListener("DOMContentLoaded", mostrarListaPokemones);
