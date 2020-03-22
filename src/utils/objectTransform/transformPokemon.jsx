import resizeArray from "../array/resizeArray";
import shuffleArray from "../array/shuffleArray";

const transformPokemon = pokemon => {
  let hp = "";
  let stats = pokemon.stats
    .filter(
      v => v.stat.name !== "special-defense" && v.stat.name !== "special-attack"
    )
    .reduce((acc, v) => {
      if (v.stat.name === "hp") {
        hp = v.base_stat;
        return acc;
      }
      return (acc = { ...acc, [v.stat.name]: v.base_stat });
    }, {});
  let moves = pokemon.moves.map(v => {
    return v.move.name;
  });
  let types = pokemon.types.map(v => {
    return v.type.name;
  });
  console.log(pokemon);
  return {
    name: pokemon.name,
    hp,
    types,
    stats,
    moves: resizeArray(shuffleArray(moves), 4),
    image: pokemon.sprites.front_default,
    image_back: pokemon.sprites.back_default,
    height: `${pokemon.height * 10} cm`,
    weight: `${pokemon.weight / 10} kg`
  };
};

export default transformPokemon;
