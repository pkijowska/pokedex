import React from "react";
import styles from "./PokemonCard.module.css";
import { getTypeColor } from "../../utils/utils";
import Pokeball from "../pokeball-image/PokeballImage";
import { usePokemonProvider } from "../../context/PokemonContext";
import { Link } from "react-router-dom";
import { PokemonType } from "../../types/types";

interface PokemonCardProps {
  id: number;
  name: string;
  image: string;
  type: [PokemonType, PokemonType] | [PokemonType];
}

const PokemonCard = ({ id, name, image, type }: PokemonCardProps) => {
  const { caughtPokemons, toggleCaughtPokemons } = usePokemonProvider();
  const isFavourite = caughtPokemons.some((pokemon) => pokemon.id === id);
  const background =
    type.length === 2
      ? `linear-gradient(56deg, ${getTypeColor(type[0])} 50%, ${getTypeColor(
          type[1]
        )} 50%)`
      : getTypeColor(type[0]);

  return (
    <div
      key={id}
      className={styles.pokemonCard}
      style={{
        background,
      }}
    >
      <p>
        {`##`}
        {id}
      </p>
      <p>{name}</p>
      <Link to={`/pokemons/${id}`}>
        <img src={image} alt={name} width="200" height="250" />
      </Link>
      <p className="center">{type.join(", ")}</p>
      <Pokeball
        onClick={() => toggleCaughtPokemons({ id, name, image, type })}
        isFavourite={isFavourite}
      />
    </div>
  );
};
export default PokemonCard;
