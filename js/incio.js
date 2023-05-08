function getTypePokemon() {
  return new Promise((resolve) => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        data.results.forEach((element) => {
          categorias.push(element);
        });
        resolve("categorias ok");
      });
  });
}


function slideCatPokemon() {
  getTypePokemon().then((response) => {
    let categoria;
    categorias.forEach((element, index) => {
      if (index == 0) {
        categoria += `<div class="carousel-item active">
            <div class="col-md-2">
              <div class="card rounded ">
                <div class="card-img">
                  <a onclick="localUrlPokemon('${element.url}')" href="typespokemon.html">
                    <img
                      src="https://i.pinimg.com/564x/e9/c8/fd/e9c8fd57a3c7e6c474084fa4cdeaa90e.jpg"
                     
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="card-img-overlays text-uppercase text-bg-warning text-black">${element.name}</div>
              </div>
            </div>
          </div>`;
      } else {
        categoria += `<div class="carousel-item">
            <div class="col-md-2">
              <div class="card rounded ">
                <div class="card-img">
                  <a onclick="localUrlPokemon('${element.url}')" href="typespokemon.html">
                    <img
                    src="https://i.pinimg.com/564x/e9/c8/fd/e9c8fd57a3c7e6c474084fa4cdeaa90e.jpg"
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="card-img-overlays text-uppercase text-bg-warning text-black">${element.name}</div>
              </div>
            </div>
          </div>`;
      }
    });

    document.getElementById("carousel-cat").innerHTML = categoria;
    flipCarousel();
  });
}
function localUrlPokemon(urlType) {
  localStorage.setItem("url", urlType);
}

var pokemones = {}

    function loadallpokemon() {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                pokemones = Object.values(data.results)
            })
    }