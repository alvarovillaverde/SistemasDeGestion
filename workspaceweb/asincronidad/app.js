const input = document.querySelector("#nombre")
const boton = document.getElementById("buscar")
const resultado = document.getElementById("resultado")

boton.addEventListener("click", buscarPokemonPromesas)

async function buscarPokemonAwait() {
    const nombre = input.value.toLowerCase()
    if (!nombre) return
    const url = "https://pokeapi.co/api/v2/pokemon/"
    const response = await fetch(url + nombre)
    const pokemon = response.json()
    resultado.innerHTML = `
        <h2>${pokemon.name}</h2>
        <h2>${pokemon.weight/10}</h2>
        <img src="${pokemon.sprites.front_default}"/>
    `
}

function buscarPokemonPromesas() {
    const nombre = input.value.toLowerCase()
    const url = "https://pokeapi.co/api/v2/pokemon/"
    const datos_pokemon = fetch(url + nombre)
    .then( (response) => response.json() )
    .then( pokemon => {
        resultado.innerHTML = `
        <h2>${pokemon.name}</h2>
        <h2>${pokemon.weight/10}</h2>
        <img src="${pokemon.sprites.front_default}"/>
        `
    } )
}