import resizeArray from "../array/resizeArray";
import shuffleArray from "../array/shuffleArray";
import capitalize from "./../math/capitalize";

const transformPokemon = pokemon => {
  const moves = (pokemon.moves = resizeArray(shuffleArray(pokemon.moves), 4));
  const name = capitalize(pokemon.name);
  return { ...pokemon, name, moves };
};

export default transformPokemon;
