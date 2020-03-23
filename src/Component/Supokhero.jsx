import React, { useState } from "react";
import PokemonList from "./Pokemons/PokemonList";
import HeroesList from "./Heroes/HeroesList";
import resizeArray from "../utils/array/resizeArray";
import shuffleArray from "../utils/array/shuffleArray";
import BattleContainer from "./Supokhero/BattleContainer";
import transformHero from "./../utils/objectTransform/transformHero";
import transformPokemon from "./../utils/objectTransform/transformPokemon";
import APIPoke from "../api/APIPoke";
import "../style/supokheroContainer.scss";

const Supokhero = ({ allPokemons, allHeroes }) => {
  const pokeAPI = new APIPoke(`${process.env.REACT_APP_BACKEND_URL}/pokemons`);
  const [pokemon, setPokemon] = useState(null);
  const [hero, setHero] = useState(null);

  const displayHero = oneHero => {
    setHero(transformHero(oneHero));
  };

  const displayPokemon = name => {
    pokeAPI
      .getPokemon(name)
      .then(apiRes => {
        let newPokemon = apiRes.data;
        setPokemon(transformPokemon(newPokemon));
      })
      .catch(apiErr => console.error(apiErr));
  };

  return (
    <div className="listAndCardContainer">
      <HeroesList heroes={allHeroes} displayHero={displayHero} />
      <BattleContainer pokemon={pokemon} hero={hero} />
      <PokemonList pokemons={allPokemons} displayPokemon={displayPokemon} />
    </div>
  );
};

export default Supokhero;
