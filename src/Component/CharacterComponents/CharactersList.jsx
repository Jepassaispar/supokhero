import React from "react";
import getRandomInt from "../../utils/math/getRandomInt";

const CharactersList = ({
  category,
  characters,
  setCharacter,
  transformCharacter,
  displayCharacter,
  addFighter
}) => {
  const randomCharacter = () => {
    return displayCharacter(
      characters[getRandomInt(characters.length - 1)],
      category,
      transformCharacter,
      setCharacter,
      addFighter
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
              onMouseEnter={() =>
                displayCharacter(
                  character,
                  category,
                  transformCharacter,
                  setCharacter
                )
              }
              onClick={() =>
                addFighter(
                  displayCharacter(
                    character,
                    category,
                    transformCharacter,
                    setCharacter,
                    addFighter
                  )
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
