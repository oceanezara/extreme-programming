import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {
  @Input() pokemonInfo : any | undefined;
  pokeData: any;

  constructor() {

   }

  ngOnInit(): void {
    console.log(this.pokemonInfo.url);
    this.fetchPokemonData(this.pokemonInfo.url);
  }

  fetchPokemonData(url: RequestInfo) {
    fetch(url)
      .then((response) => response.json())
      .then((pokeData) => {
        this.pokeData = pokeData;
        console.log(pokeData);
        //this.pokemonId = pokeData.id;
        //console.log(this.pokemonId);
      });
  }
}
