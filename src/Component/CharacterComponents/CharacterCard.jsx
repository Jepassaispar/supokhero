import React from "react";
import capitalize from "../../utils/math/capitalize";
import Stats from "../StatsComponents/Stats";
import Moves from "../StatsComponents/Moves";
import TeamDisplay from "./../TeamComponents/TeamDisplay";

export default function CharacterCard({ character, fighters }) {
  return (
    <div className="card pokemonGB">
      {character ? (
        <>
          <h3>{capitalize(character.name)}</h3>
          <div className="imageContainer">
            <img src={character.image} alt="character" className="image"></img>
          </div>
          <div className="hp">
            HP: <span>{character.hp}</span>
          </div>
          <div className="infosContainer">
            <div className="height">
              Height: <span>{character.height}</span>
            </div>
            <div className="weight">
              Weigth: <span>{character.weight}</span>
            </div>
            <div className="types">
              Type(s):{" "}
              {character.types.map((val, i) => {
                return <span key={i}>{val + " "}</span>;
              })}
            </div>
          </div>
          <Stats characterStats={character.stats} />
          <Moves characterStats={character.stats} />
          {fighters && <TeamDisplay team={fighters[character.category]} />}
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}
