const filterPokemons = pokemons => {
  return pokemons.filter((p, i) => i < 896);
};

export default filterPokemons;
