import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

export function EpisodeCard({ name, air_date, episode, image }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "30em",
        fontFamily: "Poppins",
        color: "white",
        backgroundColor: "#1E361C",
        cursor: "pointer",
        border: "2px solid #1E361C ",
        "&:hover": {
          transform: 'scale(1.1)',
          border: "3px solid #BDFFA6",
          transition: "0.5s",
        },
      }}
    >
      <CardMedia
        componente="img"
        sx={{ height: "15em" }}
        image="./assets/pickle_rick.jpeg"
        title="Episode"
      />
      <CardContent color="green">
        <Typography gutterBottom variant="h6" component="div">
          <b>Episode: </b>
          {episode}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          <b>Name: </b>
          {name}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          <b>Release date:</b> {air_date}
        </Typography>
      </CardContent>
    </Card>
  );
}
