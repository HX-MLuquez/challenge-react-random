import "./NavBar.css";

import React from "react";
import Search from "./Search";
import Random from "./Random";
import AllCharacters from "./AllCharacters";

export default function NavBar({searchName, addList, random}) {
  return (
    <div className="navbar">
        <Search searchName={searchName} cardLocation="left" />
        <Random random={random} cardLocation="left" />
        <AllCharacters addList={addList}/>
        <Search searchName={searchName} cardLocation="right"/>
        <Random random={random} cardLocation="right" />
      <div></div>
    </div>
  );
}