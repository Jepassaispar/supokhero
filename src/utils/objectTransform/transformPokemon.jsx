import resizeArray from '../array/resizeArray';
import shuffleArray from '../array/shuffleArray';

const transformPokemon = (pokemon) => {
	const moves = (pokemon.moves = resizeArray(shuffleArray(pokemon.moves), 4));
	return { ...pokemon, moves };
};

export default transformPokemon;
