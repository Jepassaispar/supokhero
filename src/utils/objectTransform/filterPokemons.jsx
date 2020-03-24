import capitalize from "./../math/capitalize";

const filterPokemons = pokemons => {
  return pokemons.filter((p, i) => i < 896).map(p => capitalize(p));
};

export default filterPokemons;
