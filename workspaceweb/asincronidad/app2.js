const form = document.querySelector("#form")
const pais = document.querySelector("#pais")
const boton = document.getElementById("buscar")

boton.addEventListener("click", buscarPaisesPromesas)

function buscarPaisesPromesas(event) {
    event.preventDefault()
    
    const API = "https://api.restcountries.com/countries/v5/names.common/"
    const API_KEY = "rc_live_779f9a7da0b1429eb8fa6fee636c8173"

    fetch(
        "https://api.restcountries.com/countries/v5?q=" + pais.value,
        { headers: { 'Authorization': 'Bearer rc_live_779f9a7da0b1429eb8fa6fee636c8173'} }
    )
    .then(function (response) { return response.json(); })
    .then(info => {
        resultado.innerHTML = `
            <p>${info.data.objects[0].capitals[0].name}</p>
            <img src="${info.data.objects[0].flag_url_svg}"/>
        `
    })
    .catch(error => console.log("Error al consultar pais"));
}