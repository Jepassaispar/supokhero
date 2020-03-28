import React from "react";
import getRandomInt from "../../utils/math/getRandomInt";

const CharactersList = ({
  category,
  characters,
  setCharacter,
  transformCharacter,
  displayCharacter
}) => {
  const randomCharacter = () => {
    return displayCharacter(
      characters[getRandomInt(characters.length - 1)],
      category,
      setCharacter,
      transformCharacter
    );
  };

  return (
    <div className="listContainer">
      <button onClick={() => randomCharacter()} className="random button ">
        Random
      </button>
      <div className="list">
        {characters.map((character, i) => {
          return (
            <div
              key={i}
              className={`${category}${i +
                1} listItem pokemonFont pokemonFontSize`}
              onClick={() =>
                displayCharacter(
                  character,
                  category,
                  setCharacter,
                  transformCharacter
                )
              }
            >
              {character}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharactersList;
