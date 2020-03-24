import resizeArray from "../array/resizeArray";
import shuffleArray from "../array/shuffleArray";
import updateStatsValue from "./updateStatsValue";

const transformHero = hero => {
  const stats = updateStatsValue(hero.stats, 1.2);
  return {
    ...hero,
    moves: resizeArray(shuffleArray(hero.moves), 4),
    stats
  };
};

export default transformHero;
