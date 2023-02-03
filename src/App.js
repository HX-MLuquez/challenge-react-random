import "./App.css";
import Home from "./component/Home";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [allCharacters, setCharacters] = useState([])
  async function apiCharacters() {
    const allData = await axios.get(
      "https://akabab.github.io/starwars-api/api/all.json"
    );
    setCharacters(allData.data)
  }
  useEffect(()=>{
    apiCharacters()
  },[])
  return (
    <div className="app">
      <Home allCharacters={allCharacters} />
    </div>
  );
}

export default App;
