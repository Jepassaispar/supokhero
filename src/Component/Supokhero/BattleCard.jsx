import React, { useState, useEffect } from "react";
import Hp from "../StatsComponents/Hp";
import Actions from "../StatsComponents/Actions";
import Stats from "../StatsComponents/Stats";
import TeamDisplay from "./../TeamComponents/TeamDisplay";

const BattleCard = ({
  actions,
  category,
  fighters,
  setFighters,
  gameStatus,
  card
}) => {
  let character = fighters[category][0];
  const [totalHp, setTotalHp] = useState({
    [fighters[category][0].name]: character.hp
  });

  useEffect(() => {
    if (!totalHp[fighters[category][0].name])
      setTotalHp({ [fighters[category][0].name]: character.hp });
  }, [fighters]);

  const checkTeamWinStatus = team => {
    for (let i = 0; i < team.length; i++) {
      if (team[i].hp > 0) return true;
      return false;
    }
  };

  return (
    <div className={`battleCardContainer ${card}`}>
      <br />
      {character && !gameStatus && (
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
          <div className="characterSideInfos">
            <div className="statsAndActionsContainer">
              <Stats characterStats={character.stats} />
              <Actions
                actions={actions}
                category={category}
                fighters={fighters}
                setFighters={setFighters}
              />
            </div>
            <TeamDisplay team={fighters[category]} />
          </div>
        </>
      )}{" "}
      {!character && <div>No character yet</div>}
      {gameStatus && checkTeamWinStatus(fighters[category]) && <h1>WIN</h1>}
      {gameStatus && !checkTeamWinStatus(fighters[category]) && <h1>LOSE</h1>}
    </div>
  );
};

export default BattleCard;
