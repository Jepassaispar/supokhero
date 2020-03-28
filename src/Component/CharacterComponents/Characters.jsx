import React, { useState, useEffect } from "react";
import CharactersList from "./CharactersList";
import CharacterCard from "./CharacterCard";
import displayCharacter from "./../../utils/character/displayCharacter";

const Characters = ({
  category,
  allCharacters,
  transformCharacter,
  direction,
  addFighter
}) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    if(addFighter) addFighter(character);
  }, [character]);

  return allCharacters.length ? (
    <div className={`listAndCardContainer ${direction}`}>
      {character ? (
        <CharacterCard character={character} />
      ) : (
        <div className="card">
          <h1>Click on a {category}</h1>
        </div>
      )}
      <CharactersList
        category={category}
        characters={allCharacters}
        setCharacter={setCharacter}
        transformCharacter={transformCharacter}
        displayCharacter={displayCharacter}
      />
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Characters;
