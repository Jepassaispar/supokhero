import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./Component/Nav/NavBar";
import Pokemons from "./Component/Pokemons/Pokemons";
import Supokhero from "./Component/Supokhero";
import Heroes from "./Component/Heroes/Heroes";
import "./style/layout.scss";
import "./style/listAndCardContainer.scss";
import APIPoke from "./api/APIPoke";
import APIHero from "./api/APIHero";

function App() {
  const pokeURL = "http://pokeapi.co/api/v2";
  const HeroAPI = new APIHero(`${process.env.REACT_APP_BACKEND_URL}/heroes`);
  const pokeAPI = new APIPoke(pokeURL);
  const [pokemons, setPokemons] = useState([]);
  const [heroes, setHeroes] = useState([]);

  const getHeroes = () => {
    HeroAPI.getAllHeroes()
      .then(apiRes => setHeroes(apiRes.data))
      .catch(apiErr => console.log(apiErr));
  };

  const getPokemons = () => {
    pokeAPI
      .getAllPoke()
      .then(apiRes => {
        setPokemons(apiRes.data.results);
      })
      .catch(apiErr => console.error(apiErr));
  };

  useEffect(() => {
    getPokemons();
    getHeroes();
  }, []);

  return (
    <div className="mainContainer">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route
          path="/supokhero"
          render={props => (
            <Supokhero
              {...props}
              allPokemons={pokemons}
              pokeURL={pokeURL}
              allHeroes={heroes}
            />
          )}
        ></Route>
        <Route
          exact
          path="/pokemons"
          render={props => (
            <Pokemons {...props} allPokemons={pokemons} pokeURL={pokeURL} />
          )}
        ></Route>
        <Route
          path="/heroes"
          render={props => <Heroes {...props} allHeroes={heroes} />}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
