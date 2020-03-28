import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../style/Nav/NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faHome,
  faBars
} from "@fortawesome/free-solid-svg-icons";
const profile = <FontAwesomeIcon icon={faUserCircle} />;
const home = <FontAwesomeIcon icon={faHome} />;
const burgerIcon = <FontAwesomeIcon icon={faBars} />;

export default function Navbar() {
  const [rotation, setRotation] = useState("");
  const [translationBar, setTranslationBar] = useState("");
  const [color, setColor] = useState("white");

  const rotate = () => {
    if (rotation) setRotation("");
    translationBar === "translationLeft"
      ? setRotation("rotationRight transit")
      : setRotation("rotationLeft transit");
    setTimeout(() => setRotation(""), 600);
  };

  const translate = () => {
    !translationBar
      ? setTranslationBar("translationLeft")
      : setTranslationBar("");
  };

  const changeColor = () => {
    color === "black"
      ? setInterval(setColor("white"), 500)
      : setInterval(setColor("black"), 500);
  };

  const navBarAnimation = e => {
    translate(e);
    rotate();
    changeColor();
  };

  return (
    <nav id="mainNav">
      <div
        className={`link ${color} ${rotation}`}
        onClick={e => navBarAnimation(e)}
        id="burgerIconContainer"
      >
        <div id="burgerIcon" className={`link ${color} ${rotation}`}>
          {burgerIcon}
        </div>
      </div>

      <div className={`mainContainer transit ${translationBar}`}>
        <NavLink className="link" id="homeLink" exact to="/">
          {home}
        </NavLink>
        <div className="linkContainer">
          <NavLink className="link" id="supokheroLink" to="/supokhero">
            Supokhero
          </NavLink>
          <NavLink className="link" id="pokemonsLink" to="/pokemons">
            Pokemons
          </NavLink>
          <NavLink className="link" id="heroesLink" to="/heroes">
            Heroes
          </NavLink>
          <NavLink className="link" id="profileLink" to="/signUp">
            {profile}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
