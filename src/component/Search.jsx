import "./Search.css";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import React, { useState } from "react";

export default function Search({ searchName, cardLocation }) {
  const [input, setInput] = useState("")

  const handleInputChange = function (e) {
    setInput(
      e.target.value,
    );
    // console.log(input)
  };

  return (
    <div>
      <Input
        type="text"
        name="username"
        value={input.username}
        onChange={(e) => handleInputChange(e)}
      />
      <Button
        variant="outlined"
        onClick={() => searchName(input, cardLocation)}
      >
        Search
      </Button>
    </div>
  );
}
