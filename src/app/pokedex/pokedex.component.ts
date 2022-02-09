import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  pokemons: any[] = [];

  constructor() {
    this.fetchAllPokemons();
  }

  ngOnInit(): void {}

  fetchAllPokemons() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((allpokemon) => {
        allpokemon.results.forEach((pokemon: any) => {
          this.pokemons = allpokemon.results;
        });
      });
  }

}
