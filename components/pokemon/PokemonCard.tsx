import { FC } from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { PokemonList } from "../../interfaces";
import { useRouter } from "next/router";

interface Props {
  pokemon: PokemonList;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <Grid xs={6} sm={4} md={3} lg={2} xl={1} key={pokemon.id}>
      <Card hoverable clickable onClick={handleClick}>
        <Card.Body>
          <Card.Image
            loading="lazy"
            src={pokemon.imagen}
            width="100%"
            height={140}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text># {pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
