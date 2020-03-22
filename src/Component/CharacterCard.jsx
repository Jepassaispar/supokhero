import React from "react";
import capitalize from "./../utils/math/capitalize";

export default function CharacterCard({ character }) {
  return (
    <div className="card pokemonGB">
      {character ? (
        <>
          <h3>{capitalize(character.name)}</h3>
          <div className="imageContainer">
            <img
              src={character.image}
              alt="pokemon image"
              className="image"
            ></img>
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
          <div className="stats">
            {Object.entries(character.stats).map(([key, val], i) => {
              return (
                <span key={i}>
                  {key} : {val.toString()}
                </span>
              );
            })}
          </div>
          {character.moves && (
            <div className="moves">
              {character.moves.map((val, i) => {
                return <span key={i}>{val + " "}</span>;
              })}
            </div>
          )}
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}
