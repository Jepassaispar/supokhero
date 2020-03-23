import React from "react";

const hp = ({ totalHp, hp }) => {
  return (
    <div className="hpContainer">
      <div className="hp">{totalHp}</div>
      <div className="hpBar"></div>
      <div className="totalHp">{totalHp}</div>
    </div>
  );
};

export default hp;
