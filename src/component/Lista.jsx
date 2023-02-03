import "./List.css";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function Lista({listCharacters}) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem>List:</ListItem>
        {
          listCharacters.length > 1 ? listCharacters.map((c)=>{
            return (
              <ListItem key={c.id}>
              <ListItemText>{c.name}</ListItemText>
              </ListItem>
            )
          }) : null

        }
        
      
    </List>
  );
}
