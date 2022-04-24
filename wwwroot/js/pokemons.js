const pokedex = document.getElementById('pokedex');
const fetchPokemon = () => {
    const promises = [];
    const pokemons_ = 130;
    for (let i = 1; i <= pokemons_; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        var pokemon = results.map((result) => ({
            name: result.name,
            id: result.id,
            image: result.sprites['front_default'],
            official_artwork: result.sprites['other']['official-artwork']['front_default'],
            types_: result.types,
            primary_type: result.types[0].type.name
        }));
        for (let i = 1; i <= pokemons_; i++) {
            try {
                pokemon[i - 1].secundary_type = pokemon[i - 1]['types_'][1]['type']['name'];
            }
            catch (error) {
                pokemon[i - 1].secundary_type = 'none';
            };
        };
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);

    const pokemonHTMLString = pokemon.map((pokeman) => `
            <div class="col-lg-2 col-md-6 portfolio-item filter-${pokeman.primary_type} filter-${pokeman.secundary_type}">
                <div class="portfolio-wrap">
                    <img class="img-fluid col-12" src="${pokeman.image}" alt="Fan art dedicated to Pokemon ${pokeman.name}, obtained from PokeApi."/>
                    <div class="portfolio-info">
                        <h4>${pokeman.name}</h4>
                        <p>Type: ${pokeman.primary_type}</p>
                        <div class="portfolio-links">
                            <a href="${pokeman.official_artwork}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${pokeman.primary_type}: ${pokeman.name}"><i class="bx bx-plus"></i></a>
                            <a><i class="bx bx-link"></i></a>
                        </div>
                    </div>
                  <div class="row">
                        <div class="col-md-6">
                            <button class="btn btn-${pokeman.primary_type}" title="${pokeman.name}">${pokeman.primary_type}</button>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-${pokeman.secundary_type}" title="${pokeman.name}">${pokeman.secundary_type}</button>
                        </div>
                    </div>
                </div>
            </div>
    `
    )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();