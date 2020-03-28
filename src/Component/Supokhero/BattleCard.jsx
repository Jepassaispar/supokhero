import React, { useState, useEffect } from "react";
import Hp from "../StatsComponents/Hp";
import Actions from "../StatsComponents/Actions";
import Stats from "../StatsComponents/Stats";

const BattleCard = ({ actions, category, fighters, setFighters, card }) => {
  let character = fighters[category][0];
  const [totalHp, setTotalHp] = useState({
    [fighters[category][0].name]: character.hp
  });

  useEffect(() => {
   if (!totalHp[fighters[category][0].name])
    setTotalHp({ [fighters[category][0].name]: character.hp });
  }, [fighters]);

  return (
    <div className={`battleCardContainer ${card}`}>
      <br />
      {character ? (
        <>
          <div className="characterInfos">
            <h1>{character.name}</h1>
            <Hp totalHp={totalHp[character.name]} hp={character.hp} />
            <div className="imageContainer">
              <img
                src={card === "top" ? character.image : character.image_back}
                className="image"
                alt="character"
              ></img>
            </div>
          </div>
          <Stats characterStats={character.stats} />
          <Actions
            actions={actions}
            category={category}
            fighters={fighters}
            setFighters={setFighters}
          />
        </>
      ) : (
        <div>No character yet</div>
      )}
    </div>
  );
};

export default BattleCard;
