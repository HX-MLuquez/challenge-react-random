import "./Home.css";
import React, { useState } from "react";
import NavBar from "./NavBar";
import Cards from "./Cards";
import Lista from "./Lista";

export default function Home({ allCharacters }) {
  // console.log("----------allCharacters---------> ", allCharacters)
  const [characters, setCharacters] = useState({
    cardLeft: {},
    cardRight: {},
  });
  const [listCharacters, setList] = useState([]);
  const addList = function () {
    setList(allCharacters);
  };
  const random = function (cardLocation) {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const idRandom = getRandomInt(87) + 1;
    const character = allCharacters.find((c) => c.id === idRandom);
    if (cardLocation === "left") {
      setCharacters({ ...characters, cardLeft: character });
    }
    if (cardLocation === "right") {
      setCharacters({ ...characters, cardRight: character });
    }
  };

  const search = function (name, cardLocation) {
    const findCharacter = allCharacters.find((card) => card.name === name);
    if (cardLocation === "left") {
      setCharacters({ ...characters, cardLeft: findCharacter });
    }
    if (cardLocation === "right") {
      setCharacters({ ...characters, cardRight: findCharacter });
    }
  };
  // console.log(".....", characters);
  return (
    <div className="home">
      <NavBar searchName={search} addList={addList} random={random} />
      <h3>Star Wars Battle!!!</h3>
      <Cards characters={characters} />
      <Lista listCharacters={listCharacters} />
      <div></div>
    </div>
  );
}
