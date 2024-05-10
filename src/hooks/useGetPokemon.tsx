import { useQuery } from "@tanstack/react-query";

const fetchPokemon = (id: number) => async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  const species = await fetch(data.species.url);
  const speciesData = await species.json();
  console.log(data.stats);
  const stats = data.stats.map(
    (stat: { stat: { name: string }; base_stat: number }) => {
      return {
        base_stat: stat.base_stat,
        name: stat.stat.name,
      };
    }
  );

  const pokemon = {
    name: data.name,
    id: data.id,
    image: data.sprites.other.dream_world.front_default,
    type: data.types.map((type: any) => type.type.name),
    height: data.height,
    weight: data.weight,
    description: speciesData.flavor_text_entries[1].flavor_text,
    color: speciesData.color.name,
    stats,
  };

  return pokemon;
};

const useGetPokemon = (id: number) => {
  const { data, status, isLoading, error, refetch } = useQuery({
    queryKey: ["pokemon"],
    queryFn: fetchPokemon(id),
  });

  return { data, status, isLoading, error, refetch };
};
export default useGetPokemon;
