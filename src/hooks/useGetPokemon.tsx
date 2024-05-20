import { useQuery } from "@tanstack/react-query";
import { PokemonDetailResponse } from "../types/types";

const fetchPokemon = async (id: number): Promise<PokemonDetailResponse> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  const species = await fetch(data.species.url);
  const speciesData = await species.json();
  const stats = data.stats.map(
    (stat: { stat: { name: string }; base_stat: number }) => {
      return {
        base_stat: stat.base_stat,
        name: stat.stat.name,
      };
    }
  );

  const englishEntry = speciesData.flavor_text_entries.find(
    (entry: { language: { name: string } }) => entry.language.name === "en"
  );

  const description = englishEntry
    ? englishEntry.flavor_text
    : "No description available.";

  const pokemon = {
    name: data.name,
    id: data.id,
    image: data.sprites.other.dream_world.front_default,
    type: data.types.map((type: any) => type.type.name),
    height: data.height,
    weight: data.weight,
    description,
    color: speciesData.color.name,
    stats,
  };

  return pokemon;
};

const useGetPokemon = (id: number) => {
  const { data, status, isLoading, error, refetch } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => fetchPokemon(id),
  });

  return { data, status, isLoading, error, refetch };
};
export default useGetPokemon;
