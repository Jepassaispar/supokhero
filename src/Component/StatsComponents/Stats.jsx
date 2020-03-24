import React from "react";

const Stats = ({ characterStats }) => {
  return (
    <div className="stats">
      {Object.entries(characterStats).map(([key, val], i) => {
        return (
          <span key={i}>
            {key} : {val.toString()}
          </span>
        );
      })}
    </div>
  );
};

export default Stats;
