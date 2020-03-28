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
  const catPokemon = "Pokemon";
  const catHero = "Hero";
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
    getCharacters(catPokemon, setPokemons, filterPokemons);
    getCharacters(catHero, setHeroes);
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
              category={catPokemon}
              allCharacters={pokemons}
              transformCharacter={transformPokemon}
              direction={"reverse-x"}
            />
          )}
        ></Route>
        <Route
          path="/heroes"
          render={props => (
            <Characters
              {...props}
              category={catHero}
              allCharacters={heroes}
              transformCharacter={transformHero}
              direction={"x"}
            />
          )}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
