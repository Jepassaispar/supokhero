import React from "react";

const Actions = ({actions, fighters, category, setFighters}) => {
  let character;
  let opponent;
  let categories = Object.keys(fighters);
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
