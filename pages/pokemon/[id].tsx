import { useEffect, useState } from "react";

import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { Grid } from "@nextui-org/react";

import confetti from "canvas-confetti";

import { MainLayout } from "../../components/layouts";
import {
  SinglePokemonCard,
  SinglePokemonImage,
} from "../../components/pokemon";
import { PokemonSmall } from "../../interfaces";
import { localFavorites, getPokemonInfo } from "../../utils";

interface Props {
  pokemon: PokemonSmall;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  /* const [isInFavorites, setIsInFavorites] = useState(
    typeof window === "undefined" && localFavorites.existInFavorites(pokemon.id)
  ); */

  const [isInFavorites, setIsInFavorites] = useState<boolean>(false);

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  useEffect(() => {
    setIsInFavorites(localFavorites.existInFavorites(pokemon.id));
  }, [pokemon.id]);

  return (
    <MainLayout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <SinglePokemonImage pokemon={pokemon} />
        </Grid>
        <Grid xs={12} sm={8}>
          <SinglePokemonCard
            pokemon={pokemon}
            isInFavorites={isInFavorites}
            onToggleFavorite={onToggleFavorite}
          />
        </Grid>
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemon151 = [...Array(151)].map((_, idx) => `${idx + 1}`);

  return {
    /* paths: [
      {
        params: { id: "1" },
      },
      {
        params: { id: "2" },
      },
      {
        params: { id: "3" },
      },
    ], */
    paths: pokemon151.map((id) => ({ params: { id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const pokemon = await getPokemonInfo(id);

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonPage;
