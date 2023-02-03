import "./AllCharacters.css";
import Button from '@mui/material/Button';
import React from "react";

export default function AllCharacters({addList}) {

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={addList}>
        AllCharacters
      </Button>
      <div></div>
    </div>
  );
}
