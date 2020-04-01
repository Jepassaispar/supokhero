import React, { useState } from "react";
import CharactersList from "./CharactersList";
import CharacterCard from "./CharacterCard";
import displayCharacter from "./../../utils/character/displayCharacter";

const Characters = ({
  category,
  allCharacters,
  transformCharacter,
  direction,
  addFighter,
  fighters
}) => {
  const [character, setCharacter] = useState(null);

  return allCharacters.length ? (
    <div className={`listAndCardContainer ${direction}X`}>
      {character ? (
        <CharacterCard character={character} fighters={fighters} />
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
        addFighter={addFighter}
      />
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Characters;
