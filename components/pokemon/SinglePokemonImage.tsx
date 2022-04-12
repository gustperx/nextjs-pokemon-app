import { FC } from "react";
import { Card } from "@nextui-org/react";
import { PokemonSmall } from "../../interfaces";

interface Props {
  pokemon: PokemonSmall;
}

export const SinglePokemonImage: FC<Props> = ({ pokemon }) => {
  return (
    <Card hoverable css={{ padding: "30px" }}>
      <Card.Body>
        <Card.Image
          src={
            pokemon.sprites.other?.dream_world.front_default || "no-image.png"
          }
          alt={pokemon.name}
          width="100%"
          height={200}
        />
      </Card.Body>
    </Card>
  );
};
