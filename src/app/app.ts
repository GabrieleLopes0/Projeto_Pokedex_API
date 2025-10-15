import { Component, signal } from '@angular/core';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokemonListComponent],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('Pokédex - Angular');
}
