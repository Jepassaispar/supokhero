import React from "react";
import getRandomInt from "../../utils/math/getRandomInt";

const HeroesList = ({ heroes, displayHero, hero }) => {
  const randomHero = () => {
    return displayHero(heroes[getRandomInt(heroes.length - 1)]);
  };

  return (
    <div className="listContainer">
      <button onClick={() => randomHero(hero)} className="random button ">
        Random
      </button>
      <div className="list">
        {heroes.map((hero, i) => (
          <div
            key={i}
            className={`hero${i} listItem`}
            onClick={() => displayHero(hero)}
          >
            {hero.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroesList;
