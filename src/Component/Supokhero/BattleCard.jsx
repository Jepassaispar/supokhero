import React, { useState } from "react";
import Hp from "./../CharacterComponents/Hp";
import Actions from "./../CharacterComponents/Actions";
import Stats from "./../CharacterComponents/Stats";

const BattleCard = ({ character, card }) => {
  const [hp, setHp] = useState(character.hp);

  return (
    <div className={`battleCardContainer ${card}`}>
      <br />
      {character ? (
        <>
          <div className="characterInfos">
            <h1>{character.name}</h1>
            <Hp totalHp={character.hp} />
            <div className="imageContainer">
              <img
                src={card === "top" ? character.image : character.image_back}
                className="image"
                alt="character"
              ></img>
            </div>
          </div>
          <Stats characterStats={character.stats} />
          <Actions />
        </>
      ) : (
        <div>No character yet</div>
      )}
    </div>
  );
};

export default BattleCard;
