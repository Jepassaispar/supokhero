import resizeArray from "../array/resizeArray";
import shuffleArray from "../array/shuffleArray";

const transformHero = hero => {
  return {
    ...hero,
    moves: resizeArray(shuffleArray(hero.moves), 4)
  };
};

export default transformHero;
