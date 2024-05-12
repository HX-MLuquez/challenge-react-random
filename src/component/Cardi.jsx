import * as React from "react";
import "./Cardi.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// https://mui.com/material-ui/react-card/ -> Complex Interaction

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Cardi({ character }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        sx={{ width: 280 }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {character ? character.id : ""}
          </Avatar>
        }
      />

      <CardContent></CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography paragraph>{character ? character.name : null}</Typography>
          <img
            src={character ? character.image : ""}
            alt={character ? character.image : ""}
            loading="lazy"
          />
          <Typography paragraph>
            {character ? character.homeworld : null}
          </Typography>
          <Typography paragraph>
            {character ? character.species : null}
          </Typography>
          <Typography paragraph>
            {character ? character.gender : null}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
