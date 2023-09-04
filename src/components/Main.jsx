import { Pokemon } from "../pokemons";
import Card from "./Card";
import styles from "./Main.module.css";

const Main = () => {
  const typesOfPokemons = Object.keys(Pokemon);
  return (
    <>
      <div className={styles.mainContainer}>
        <h1>Lista de pokemons</h1>
        <div className={styles.cardContainer}>
          {typesOfPokemons.map((type) => (
            <Card key={type} data={Pokemon[type]} type={type} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
