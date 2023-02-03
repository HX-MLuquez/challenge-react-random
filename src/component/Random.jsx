import "./Random.css";
import Button from '@mui/material/Button';

import React from "react";

export default function Random({random, cardLocation}) {
  return (
    <div>
        <Button variant="contained" color="success" onClick={()=>random(cardLocation)}>Random</Button>
      <div></div>
    </div>
  );
}