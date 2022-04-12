import { Button, Card, Container, Text } from "@nextui-org/react";
import Image from "next/image";
import { FC } from "react";
import { PokemonSmall } from "../../interfaces";

interface Props {
  pokemon: PokemonSmall;
  isInFavorites: boolean;
  onToggleFavorite: () => void;
}

export const SinglePokemonCard: FC<Props> = ({
  pokemon,
  isInFavorites,
  onToggleFavorite,
}) => {
  return (
    <Card>
      <Card.Header css={{ display: "flex", justifyContent: "space-between" }}>
        <Text h1 transform="capitalize">
          {pokemon.name}
        </Text>
        <Button
          color={"gradient"}
          ghost={!isInFavorites}
          onClick={onToggleFavorite}
        >
          {isInFavorites ? "In favorites" : "Save to favorites"}
        </Button>
      </Card.Header>
      <Card.Body>
        <Text size={30}>Sprites:</Text>
        <Container display="flex" direction="row" justify="space-between">
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={100}
            height={100}
          />
          <Image
            src={pokemon.sprites.back_default}
            alt={pokemon.name}
            width={100}
            height={100}
          />
          <Image
            src={pokemon.sprites.front_shiny}
            alt={pokemon.name}
            width={100}
            height={100}
          />
          <Image
            src={pokemon.sprites.back_shiny}
            alt={pokemon.name}
            width={100}
            height={100}
          />
        </Container>
      </Card.Body>
    </Card>
  );
};
