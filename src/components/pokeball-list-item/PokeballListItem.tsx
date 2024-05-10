import { Pokemon } from "../../types/types";
import styles from "./PokeballListItem.module.css";

const PokeballListItem = ({ name, image, id, type }: Pokemon) => {
  return (
    <>
      <img src={image} alt={name} className={styles.pokemonImage} />
      <div className={styles.details}>
        <h3 className={styles.pokemonName}>{name}</h3>
        <p className={styles.pokemonInfo}>ID: {id}</p>
        <p className={styles.pokemonInfo}>Type: {type?.join(", ")}</p>
      </div>
    </>
  );
};
export default PokeballListItem;
