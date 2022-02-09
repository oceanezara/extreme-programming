import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { catchError, delay, of } from 'rxjs';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
})
export class PokemonItemComponent implements OnInit {
  @Input() pokemonInfo: any | undefined;
  pokeData: any;
  isLoading = true;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    console.log(this.pokemonInfo.url);
    this.fetchPokemonData(this.pokemonInfo.url);
  }

  fetchPokemonData(url: string) {
    this.httpClient
      .get(url)
      .pipe(
        catchError((error) => {
          console.error(error);
          return of([]);
        }),
      )
      .pipe(delay(1000))
      .subscribe((pokeData: any) => {
        this.isLoading = false;
        this.pokeData = pokeData;
      });
  }
}
