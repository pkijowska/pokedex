import { PokemonType } from "../../types/types";
import style from "./PokemonPill.module.css";

const PokemonPill = ({ type }: { type: PokemonType }) => {
  return (
    <div className={style.pokemonPill}>
      <span>{type}</span>
    </div>
  );
};
export default PokemonPill;
