import React, { useState, useEffect } from "react";
import Characters from "./../CharacterComponents/Characters";
import BattleContainer from "./BattleContainer";
import transformHero from "../../utils/objectTransform/transformHero";
import transformPokemon from "../../utils/objectTransform/transformPokemon";
import isFighterSelected from "./../../utils/team/isFighterSelected";
import "./../../style/supokheroContainer.scss";

const Supokhero = ({ allPokemons, allHeroes }) => {
  const catPokemon = "Pokemon";
  const catHero = "Hero";
  const [fighters, setFighters] = useState({
    [catPokemon]: [],
    [catHero]: []
  });

  const checkTeamsLength = fighters => {
    let categories = Object.keys(fighters);
    for (let i = 0; i < categories.length; i++) {
      if (fighters[categories[i]].length !== 4) return false;
    }
    return true;
  };

  const win = () => {
    console.log("Win team 1")
  }

  const checkFightersHealth = fighters => {
    
  }

  const addFighter = character => {
    if (
      character &&
      fighters[character.category].length < 4 &&
      isFighterSelected(character, fighters)
    ) {
      setFighters({
        ...fighters,
        ...{
          [character.category]: [...fighters[character.category], character]
        }
      });
    }
  };

  useEffect(() => {
    checkTeamsLength(fighters);
  }, [fighters]);

  return (
    <div className="supokhero">
      {checkTeamsLength(fighters) ? (
        <BattleContainer
          category1={catHero}
          category2={catPokemon}
          fighters={fighters}
          setFighters={setFighters}
        />
      ) : (
        <>
          <Characters
            category={catPokemon}
            allCharacters={allPokemons}
            transformCharacter={transformPokemon}
            direction={"reverse-x"}
            addFighter={addFighter}
          />
          <Characters
            category={catHero}
            allCharacters={allHeroes}
            transformCharacter={transformHero}
            direction={"x"}
            addFighter={addFighter}
          />
        </>
      )}
    </div>
  );
};

export default Supokhero;
