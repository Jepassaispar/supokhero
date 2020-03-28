import React from "react";

const hp = ({ totalHp, hp }) => {
  return (
    <div className="hpContainer">
      <div className="hp">{hp || "0"}</div>
      <input
        type="range"
        value={hp || "0"}
        max={totalHp || hp}
        className="hpBar"
      ></input>
      <div className="totalHp">{totalHp}</div>
    </div>
  );
};

export default hp;
