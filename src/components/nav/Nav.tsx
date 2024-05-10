import { useEffect, useState } from "react";
import { usePokemonProvider } from "../../context/PokemonContext";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const { caughtPokemons } = usePokemonProvider();
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    if (caughtPokemons.length) {
      setIsShaking(true);
      const timer = setTimeout(() => {
        setIsShaking(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [caughtPokemons.length]);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.wrapper}`}>
        <img
          src={`${process.env.PUBLIC_URL}/pokemon-title.jpg`}
          alt="Pokémon Logo"
          className={styles.logo}
        />

        <div className={styles.favourites}>
          <div className={styles.homeLink}>
            <Link to="/pokemons">Home</Link>
          </div>
          <Link to="/pokeball">
            {" "}
            <img
              src={`${process.env.PUBLIC_URL}/pokeball.png`}
              alt="Pokeball"
              className={`${styles.pokeball} ${isShaking ? styles.shake : ""}`}
            />
          </Link>
          <p className={styles.favouritesText}>{caughtPokemons.length}</p>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
