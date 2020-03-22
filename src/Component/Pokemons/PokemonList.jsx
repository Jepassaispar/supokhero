import React from "react";
import getRandomInt from "../../utils/math/getRandomInt";

export default function PokemonList({ pokemons, displayPokemon }) {
  
  function randomPokemon() {
    return displayPokemon(pokemons[getRandomInt(pokemons.length - 1)].name);
  }

  return (
    <div className="listContainer">
      <button onClick={() => randomPokemon()} className="random button ">
        Random
      </button>
      <div className="list">
        {pokemons.map((pokemon, i) => {
          return (
            <div
              key={i}
              className={`pokemon${i + 1} listItem pokemonGB pokemonFontSize`}
              onClick={() => displayPokemon(pokemon.name)}
            >
              {pokemon.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
