export interface PokemonList {
  id: number;
  name: string;
  imagen: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
