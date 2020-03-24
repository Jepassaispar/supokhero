import React, { useState } from "react";
import CharactersList from "./CharactersList";
import CharacterCard from "./CharacterCard";
import APICharacter from "./../../api/APICharacter";

const Characters = ({ category, allCharacters, transformCharacter }) => {
  const characterAPI = new APICharacter(category);
  const [character, setCharacter] = useState(null);

  const displayCharacter = name => {
    characterAPI
      .getOneCharacter(name)
      .then(apiRes => {
        setCharacter(transformCharacter(apiRes.data));
      })
      .catch(apiErr => console.error(apiErr));
  };

  return allCharacters.length ? (
    <div className="listAndCardContainer">
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
        displayCharacter={displayCharacter}
      />
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Characters;
