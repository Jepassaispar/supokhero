import React from "react";

const Actions = ({actions, fighters, category, setFighters}) => {
  return (
    <div className="actions">
      <span onClick={() => actions.attack(fighters, category, setFighters)}>Attack</span>
      <span>Object</span>
      <span>Charm</span>
      <span>Run</span>
    </div>
  );
};

export default Actions;
