import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Home from "./Home";
import NavBar from "./Component/Nav/NavBar";
import Characters from "./Component/CharacterComponents/Characters";
import Supokhero from "./Component/Supokhero/Supokhero";

// Functions
import filterPokemons from "./utils/objectTransform/filterPokemons";
import transformHero from "./utils/objectTransform/transformHero";
import transformPokemon from "./utils/objectTransform/transformPokemon";

// Styles
import "./style/layout.scss";
import "./style/listAndCardContainer.scss";

// APIHandler
import APICharacter from "./api/APICharacter";

function App() {
  const pokemon = "Pokemon";
  const hero = "Hero";
  const [pokemons, setPokemons] = useState([]);
  const [heroes, setHeroes] = useState([]);

  const getCharacters = (category, setCharacter, filterCharacter) => {
    const characterAPI = new APICharacter(category);
    characterAPI
      .getAllCharacters()
      .then(apiRes => {
        filterCharacter
          ? setCharacter(filterCharacter(apiRes.data))
          : setCharacter(apiRes.data);
      })
      .catch(apiErr => console.error(apiErr));
  };

  useEffect(() => {
    getCharacters(pokemon, setPokemons, filterPokemons);
    getCharacters(hero, setHeroes);
  }, []);

  return (
    <div className="mainContainer">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route
          path="/supokhero"
          render={props => (
            <Supokhero {...props} allPokemons={pokemons} allHeroes={heroes} />
          )}
        ></Route>
        <Route
          exact
          path="/pokemons"
          render={props => (
            <Characters
              {...props}
              category={pokemon}
              allCharacters={pokemons}
              transformCharacter={transformPokemon}
            />
          )}
        ></Route>
        <Route
          path="/heroes"
          render={props => (
            <Characters
              {...props}
              category={hero}
              allCharacters={heroes}
              transformCharacter={transformHero}
            />
          )}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
