
// esto para consumir api de pokemones general

var pokemones = {}

function loadallpokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            pokemones = Object.values(data.results)
        })
}
//  esto es para el autocompletado
function autocompletedpokemon() {
    let textoBuscar = document.getElementById("txtBuscar").value
    const filtropokemon = pokemones.filter(filtrarpokemon)

    // es para que comience a filtrar despues de 3 letras
    if (textoBuscar.lenght >= 3) {
        console.log(filtropokemon);
    }
}

function filtrarpokemon(element) {
    let textoBuscar = document.getElementById("txtBuscar").value
    return element.name
    return nombre.includes(textoBuscar.toLowerCase())
}

