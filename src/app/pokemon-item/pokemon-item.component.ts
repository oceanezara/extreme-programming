import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {

  constructor() {
    console.log()
    //this.fetchPokemonData(pokemon.url);
   }

  ngOnInit(): void {
  }
/*
  fetchPokemonData(url: RequestInfo) {
    fetch(url)
      .then((response) => response.json())
      .then((pokeData) => {
        this.pokemonId = pokeData.id;
        console.log(this.pokemonId);
        //console.log(pokeData);
      });
  } */
}
