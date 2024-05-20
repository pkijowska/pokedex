import { useQuery } from "@tanstack/react-query";
import { PokemonsResponse } from "../types/types";

const fetchPokemons = async (): Promise<PokemonsResponse> => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await res.json();

  const pokemons = data.results.map(async (pokemon: any) => {
    const response = await fetch(pokemon.url);
    const obj = await response.json();

    const pokemonObj = {
      name: obj.name,
      id: obj.id,
      image: obj.sprites?.other?.dream_world?.front_default,
      type: obj.types.map((type: any) => type.type.name),
      height: obj.height,
      weight: obj.weight,
    };
    return pokemonObj;
  });

  return Promise.all(pokemons);
};

const useGetPokemonsApi = () => {
  const { data, status, isLoading, error } = useQuery({
    queryKey: ["pokemons"],
    queryFn: fetchPokemons,
  });

  return { data, status, isLoading, error };
};
export default useGetPokemonsApi;
