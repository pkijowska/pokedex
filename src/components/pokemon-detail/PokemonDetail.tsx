import { Link, useParams } from "react-router-dom";
import useGetPokemon from "../../hooks/useGetPokemon";
import Loader from "../loader/Loader";
import style from "./PokemonDetail.module.css";
import PokemonPill from "../pokemon-pill/PokemonPill";
import { capitaliseFirstLetter } from "../../utils/utils";

import Error from "../error/Error";
import PokemonStats from "../pokemon-stats/PokemonStats";
import { PokemonType } from "../../types/types";

const PokemonDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetPokemon(Number(id));

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <h1 className="center">Pokemon details</h1>
      <div className={style.wrapper}>
        <div className={style.leftSide}>
          <Link to="/" className={style.backLink}>
            {" "}
            {`<`} Back to all pokemons
          </Link>
          <img
            src={data?.image}
            alt={data?.name}
            style={{ filter: `drop-shadow(0 0 80px ${data?.color})` }}
            width="550"
            height="650"
          />
          <div className={style.pillWrapper}>
            {data?.type.map((type: PokemonType) => (
              <PokemonPill key={type} type={type} />
            ))}
          </div>
        </div>
        <div className={style.rightSide}>
          <h1>{capitaliseFirstLetter(data?.name ?? "")}</h1>
          <div className={style.description}>
            <h2>Description</h2>
            <p>{data?.description}</p>
            <h2>Stats</h2>
            <div className={style.stats}>
              {data?.stats.map((stat: { name: string; base_stat: number }) => (
                <PokemonStats
                  key={stat.name}
                  name={stat.name}
                  value={stat.base_stat}
                />
              ))}
            </div>
            <h2>Height</h2>
            <p>{data?.height}</p>
            <h2>Weight</h2>
            <p>{data?.weight}</p>
          </div>
          <div className={style.links}>
            {id !== "1" && (
              <Link
                className={style.prevLink}
                to={`/pokemons/${Number(id) - 1}`}
              >
                {`<`} Previous Pokemon
              </Link>
            )}
            {id !== "1025" && (
              <Link
                className={style.nextLink}
                to={`/pokemons/${Number(id) + 1}`}
              >
                Next Pokemon {`>`}
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default PokemonDetail;
