import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  pokemon = signal<Pokemon[]>([]);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);
  expandedPokemon = signal<number | null>(null);
  pokemonDetails = signal<Map<number, Pokemon>>(new Map());

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon(): void {
    this.loading.set(true);
    this.error.set(null);

    this.pokemonService.getPokemonList(20, 0).subscribe({
      next: (data: Pokemon[]) => {
        this.pokemon.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Erro ao carregar Pokemon.');
        this.loading.set(false);
      }
    });
  }

  togglePokemonDetails(pokemonId: number): void {
    if (this.expandedPokemon() === pokemonId) {
      this.expandedPokemon.set(null);
    } else {
      this.expandedPokemon.set(pokemonId);
      this.loadPokemonDetails(pokemonId);
    }
  }

  private loadPokemonDetails(pokemonId: number): void {
    if (this.pokemonDetails().has(pokemonId)) {
      return;
    }

    this.pokemonService.getPokemonDetails(pokemonId).subscribe({
      next: (details: Pokemon) => {
        const currentDetails = this.pokemonDetails();
        currentDetails.set(pokemonId, details);
        this.pokemonDetails.set(new Map(currentDetails));
      },
      error: (err) => {
        console.error('Erro ao carregar detalhes do Pokemon:', err);
      }
    });
  }

  getPokemonDetails(pokemonId: number): Pokemon | undefined {
    return this.pokemonDetails().get(pokemonId);
  }

  isExpanded(pokemonId: number): boolean {
    return this.expandedPokemon() === pokemonId;
  }
}