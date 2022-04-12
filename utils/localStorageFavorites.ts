const toggleFavorite = (id: number) => {
  let favorites: number[] = getPokemonsInFavorites();

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  // if (typeof window === "undefined") return false;

  const favorites: number[] = getPokemonsInFavorites();
  return favorites.includes(id);
};

const pokemons = (): number[] => {
  return getPokemonsInFavorites();
};

const getPokemonsInFavorites = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  toggleFavorite,
  existInFavorites,
  pokemons,
};
