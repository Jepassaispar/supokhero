import React from "react";
import BattleCard from "./BattleCard";

const BattleContainer = ({ hero, pokemon }) => {
  return (
    <div className="battleContainer">
      {hero && pokemon ? (
        <>
          <BattleCard character={hero} card="top" />
          <BattleCard character={pokemon} card="bottom" />
        </>
      ) : (
        <h1>Choose your fighters !</h1>
      )}
    </div>
  );
};

export default BattleContainer;
