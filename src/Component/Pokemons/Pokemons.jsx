import React, { useState } from "react";
import PokemonList from "./PokemonList";
import CharacterCard from "./../CharacterCard";
import APIPoke from "./../../api/APIPoke";
import transformPokemon from "./../../utils/objectTransform/transformPokemon";

const Pokemons = ({ allPokemons, pokeURL }) => {
  const pokeAPI = new APIPoke(pokeURL);
  const [pokemon, setPokemon] = useState(null);

  const displayPokemon = name => {
    pokeAPI
      .getPokemon(name)
      .then(apiRes => {
        setPokemon(transformPokemon(apiRes.data));
      })
      .catch(apiErr => console.error(apiErr));
  };

  return allPokemons.length ? (
    <div className="listAndCardContainer">
      <PokemonList
        pokemons={allPokemons}
        url={pokeURL}
        displayPokemon={displayPokemon}
      />
      {pokemon ? (
        <CharacterCard character={pokemon} />
      ) : (
        <div className="card">
          <h1>Click on a Pokemon</h1>
        </div>
      )}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Pokemons;
