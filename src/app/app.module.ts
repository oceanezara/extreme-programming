import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import { ListLoaderComponent } from './list-loader/list-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokedexComponent,
    PokemonItemComponent,
    ListLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
