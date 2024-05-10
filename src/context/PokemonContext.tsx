import { createContext, useContext } from "react";
import { Pokemon, PokemonContextType } from "../types/types";
import React from "react";

export const PokemonContext = createContext<PokemonContextType>(
  {} as PokemonContextType
);

export const usePokemonProvider = () => useContext(PokemonContext);

const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [caughtPokemons, setCaughtPokemons] = React.useState<any[]>([]);

  const toggleCaughtPokemons = (pokemon: Pokemon) => {
    setCaughtPokemons((prev) => {
      if (prev.some((p) => p.id === pokemon.id)) {
        return prev.filter((p) => p.id !== pokemon.id);
      }
      return [...prev, pokemon];
    });
  };

  return (
    <PokemonContext.Provider
      value={{
        toggleCaughtPokemons,
        caughtPokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
export default PokemonProvider;
