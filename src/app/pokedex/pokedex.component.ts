import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  pokemons: string[] = [];

  constructor() {}

  ngOnInit(): void {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then(function (allpokemon) {
        allpokemon.results.forEach(function (pokemon: any) {
          fetchPokemonData(pokemon);
        });
        console.log(allpokemon);
      });
  }
}

function fetchPokemonData(pokemon: any) {
  let url = pokemon.url; // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.//co/api/v2/pokemon/1/)
  fetch(url)
    .then((response) => response.json())
    .then(function (pokeData) {
      console.log(pokeData.id);
      renderPokemon(pokeData);
      //createPokeImage(pokeData.id, pokeContainer);
    });
}

function renderPokemon(pokeData: { name: string; id: any; types: any }) {
  let allPokemonContainer = document.getElementById('poke-container');
  let pokeContainer = document.createElement('div'); //div will be used to hold the data/details for indiviual pokemon.{}
  let pokeName = document.createElement('h4');
  pokeName.innerText = pokeData.name;
  let pokeNumber = document.createElement('p');
  pokeNumber.innerText = `#${pokeData.id}`;
  let pokeTypes = document.createElement('ul');
  //ul list will hold the pokemon types
  createTypes(pokeData.types, pokeTypes);
  // helper function to go through the types array and create li tags for each one
  pokeContainer.append(pokeName, pokeNumber, pokeTypes);
  //appending all details to the pokeContainer div
  allPokemonContainer!.appendChild(pokeContainer);
  //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
}

function createTypes(types: any[], ul: HTMLUListElement) {
  types.forEach(function (type) {
    let typeLi = document.createElement('li');
    typeLi.innerText = type['type']['name'];
    ul.append(typeLi);
  });
}

function createPokeImage(
  pokeID: number,
  containerDiv: { append: (arg0: HTMLImageElement) => void }
) {
  let pokeImage = document.createElement('img');
  pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`;
  containerDiv.append(pokeImage);
}
