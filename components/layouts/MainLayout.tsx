import Head from "next/head";
import { FC, ReactNode } from "react";
import { Navbar } from "../ui";

interface Props {
  children?: ReactNode;
  title?: string;
}

export const MainLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokémon App"}</title>
        <meta name="author" content="Gustavo Perez" />
        <meta
          name="description"
          content={`Information about the pokémon ${title}`}
        />
        <meta name="keyworks" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
