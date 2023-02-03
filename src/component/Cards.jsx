import "./Cards.css";

import React from "react";
import Cardi from "./Cardi";

export default function Cards({characters}) {
  const cardLeft = characters.cardLeft.name ? characters.cardLeft : null
  const cardRight = characters.cardRight.name ? characters.cardRight : null
  return (
    <div className="cards">
      <Cardi character={cardLeft}/>
      <Cardi character={cardRight}/>
    </div>
  );
} 