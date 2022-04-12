import { pokeApi } from "../api";
import { Pokemon, PokemonSmall } from "../interfaces";

export const getPokemonInfo = async (
  nameOrId: string
): Promise<PokemonSmall> => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

  const pokemon: PokemonSmall = {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };

  return pokemon;
};
