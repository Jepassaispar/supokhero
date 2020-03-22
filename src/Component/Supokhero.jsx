import React, { useState, useEffect } from "react";
import PokemonList from "./Pokemons/PokemonList";
import HeroesList from "./Heroes/HeroesList";
import resizeArray from "../utils/array/resizeArray";
import shuffleArray from "../utils/array/shuffleArray";
import BattleContainer from "./Supokhero/BattleContainer";
import APIPoke from "../api/APIPoke";
import "../style/supokheroContainer.scss";

const Supokhero = ({ allPokemons, pokeURL, allHeroes }) => {
  const pokeAPI = new APIPoke(pokeURL);
  const [pokemon, setPokemon] = useState(null);
  const [hero, setHero] = useState(null);

  const displayHero = oneHero => {
    setHero(oneHero);
  };

  const displayPokemon = name => {
    pokeAPI
      .getPokemon(name)
      .then(apiRes => {
        let newPokemon = apiRes.data;
        newPokemon.moves = resizeArray(shuffleArray(newPokemon.moves), 4);
        setPokemon(newPokemon);
      })
      .catch(apiErr => console.error(apiErr));
  };

  return (
    <div className="listAndCardContainer">
      <PokemonList
        pokemons={allPokemons}
        url={pokeURL}
        displayPokemon={displayPokemon}
      />
      <BattleContainer pokemon={pokemon} hero={hero} />
      <HeroesList heroes={allHeroes} displayHero={displayHero} />
    </div>
  );
};

export default Supokhero;
