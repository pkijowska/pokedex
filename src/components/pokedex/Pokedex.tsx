import Button from "@mui/material/Button";
import { usePokemonProvider } from "../../context/PokemonContext";
import styles from "./Pokedex.module.css";
import { Link } from "react-router-dom";
import PokeballListItem from "../pokeball-list-item/PokeballListItem";

const Pokedex = () => {
  const { caughtPokemons, toggleCaughtPokemons } = usePokemonProvider();

  return (
    <>
      <h1 className="center">Pokedex</h1>
      <Link to="/pokemons" className={styles.backLink}>
        {"<"} Back to all pokemons
      </Link>
      {caughtPokemons.length === 0 && (
        <p className="center">You haven't caught any pokemons yet!</p>
      )}
      {caughtPokemons.map((pokemon) => (
        <div key={pokemon.id} className={styles.favouriteItem}>
          <PokeballListItem
            name={pokemon.name}
            image={pokemon.image}
            id={pokemon.id}
            type={pokemon.type}
          />

          <Button
            onClick={() => toggleCaughtPokemons(pokemon)}
            variant="outlined"
            color="error"
          >
            DELETE
          </Button>
        </div>
      ))}
    </>
  );
};
export default Pokedex;
