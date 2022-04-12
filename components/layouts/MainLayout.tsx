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
        <meta name="description" content={`Information about ${title}`} />
        <meta name="keyworks" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Information about ${title}`} />
        <meta
          property="og:description"
          content={`This is the page about ${title}`}
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dpfdgvz5b/image/upload/v1649796441/varios/sqrknsdfvbdi4ykqkf66.png"
        />
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
