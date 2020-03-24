import React, { useState } from "react";
import CharactersList from "../CharacterComponents/CharactersList";
import BattleContainer from "./BattleContainer";
import transformHero from "../../utils/objectTransform/transformHero";
import transformPokemon from "../../utils/objectTransform/transformPokemon";
import APICharacter from "../../api/APICharacter";
import "./../../style/supokheroContainer.scss";

const Supokhero = ({ allPokemons, allHeroes }) => {
  const pokeAPI = new APICharacter("Pokemon");
  const heroAPI = new APICharacter("Hero");
  const [pokemon, setPokemon] = useState(null);
  const [hero, setHero] = useState(null);

  const displayHero = name => {
    heroAPI
      .getOneCharacter(name)
      .then(apiRes => {
        let newHero = apiRes.data;
        setHero(transformHero(newHero));
      })
      .catch(apiErr => console.error(apiErr));
  };

  const displayPokemon = name => {
    pokeAPI
      .getOneCharacter(name)
      .then(apiRes => {
        let newPokemon = apiRes.data;
        setPokemon(transformPokemon(newPokemon));
      })
      .catch(apiErr => console.error(apiErr));
  };

  return (
    <div className="listAndCardContainer">
      <CharactersList
        category={"Hero"}
        characters={allHeroes}
        displayCharacter={displayHero}
      />
      <BattleContainer pokemon={pokemon} hero={hero} />
      <CharactersList
        category={"Pokemon"}
        characters={allPokemons}
        displayCharacter={displayPokemon}
      />
    </div>
  );
};

export default Supokhero;
