import { NextPage, GetStaticProps } from "next";

import { Grid } from "@nextui-org/react";

import { MainLayout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";
import { PokemonList, PokemonListResponse } from "../interfaces";
import { pokeApi } from "../api";

interface Props {
  pokemons: PokemonList[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <MainLayout title="Pokemon List">
      <Grid.Container gap={2} justify={"flex-start"}>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: PokemonList[] = data.results.map((poke) => {
    const numbers = poke.url.match(/\d+/g);
    const id: number =
      numbers && numbers.length === 2 && numbers[1] ? Number(numbers[1]) : 1;
    return {
      id,
      imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
      ...poke,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
