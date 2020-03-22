import React from "react";
import BattleCard from "./BattleCard";

const BattleContainer = ({hero, pokemon}) => {
  return (
    <div className="battleContainer">
      <BattleCard character={pokemon}/>
      <BattleCard character={hero}/>
    </div>
  );
};

export default BattleContainer;
