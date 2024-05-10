import Loader from "../loader/Loader";
import useGetPokemonsApi from "../../hooks/useGetPokemons";
import styles from "./PokemonList.module.css";
import PokemonCard from "../pokemon-card/PokemonCard";
import Error from "../error/Error";

const PokemonList = () => {
  const { data, isLoading, error } = useGetPokemonsApi();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className={styles.pokemonContainer}>
      {data?.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          type={pokemon.type}
          id={pokemon.id}
        />
      ))}
    </div>
  );
};

export default PokemonList;
