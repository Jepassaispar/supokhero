import React, { useState } from "react";
import HeroesList from "./HeroesList";
import CharacterCard from "./../CharacterCard";
import transformHero from "./../../utils/objectTransform/transformHero";

const Heroes = ({ allHeroes }) => {
  const [hero, setHero] = useState(null);

  const displayHero = oneHero => {
    setHero(transformHero(oneHero));
  };

  return allHeroes.length ? (
    <div className="listAndCardContainer">
      {hero ? (
        <CharacterCard character={hero} />
      ) : (
        <div className="card">
          <h1>Click on a Hero</h1>
        </div>
      )}
      <HeroesList heroes={allHeroes} displayHero={displayHero} hero={hero} />
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Heroes;
