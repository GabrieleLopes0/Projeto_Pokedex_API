import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private httpClient: HttpClient) {}

  getPokemonList(limit: number = 20, offset: number = 0): Observable<Pokemon[]> {
    return this.httpClient.get<any>(`${this.apiUrl}?limit=${limit}&offset=${offset}`).pipe(
      map((response: any) => {
        return response.results.map((pokemon: any, index: number) => ({
          id: index + 1 + offset,
          name: pokemon.name
        }));
      })
    );
  }

  getPokemonDetails(id: number): Observable<Pokemon> {
    return this.httpClient.get<any>(`${this.apiUrl}/${id}`).pipe(
      map((response: any) => ({
        id: response.id,
        name: response.name,
        height: response.height,
        weight: response.weight,
        base_experience: response.base_experience,
        types: response.types,
        sprites: response.sprites
      }))
    );
  }
}