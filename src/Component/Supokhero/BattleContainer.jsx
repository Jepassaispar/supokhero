import React, { useEffect } from "react";
import BattleCard from "./BattleCard";
import attack from "../../utils/character/attack";

const BattleContainer = ({ category1, category2, fighters, setFighters }) => {
  const actions = {
    attack
  };

  return (
    <div className="battleContainer">
      {fighters ? (
        <>
          <BattleCard
            actions={actions}
            category={category1}
            fighters={fighters}
            setFighters={setFighters}
            card="top"
          />
          <BattleCard
            actions={actions}
            category={category2}
            fighters={fighters}
            setFighters={setFighters}
            card="bottom"
          />
        </>
      ) : (
        <h1>Choose your fighters !</h1>
      )}
    </div>
  );
};

export default BattleContainer;
