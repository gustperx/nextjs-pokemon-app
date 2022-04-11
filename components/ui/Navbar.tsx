import { FC } from "react";
/* import Link from "next/link"; */
import { useTheme, Text, Spacer, Link } from "@nextui-org/react";
import Image from "next/image";

export const Navbar: FC = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray700.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/52.svg"
        alt="Icono"
        width={35}
        height={35}
      />

      <Spacer x={0.3} />

      <Link href="/">
        <Text color={theme?.colors.yellow500.value} h2>
          P
        </Text>
        <Text color={theme?.colors.yellow500.value} h3>
          okémon
        </Text>
      </Link>

      <Spacer
        css={{
          flex: 1,
        }}
      />

      <Link href="/favorites">
        <Text>Favorites</Text>
      </Link>
    </div>
  );
};
