import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, delay, of } from 'rxjs';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  pokemons: any[] = [];
  isLoading = true;

  constructor(private httpClient: HttpClient) {
    this.fetchAllPokemons();
  }

  ngOnInit(): void {}

  fetchAllPokemons() {
    this.httpClient
      .get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .pipe(
        catchError((error) => {
          console.error(error);
          return of([]);
        }),
      )
      .pipe(delay(1000))
      .subscribe((allpokemon: any) => {
        allpokemon.results.forEach((pokemon: any) => {
          this.isLoading = false;
          this.pokemons = allpokemon.results;
        });
      });
  }
}
