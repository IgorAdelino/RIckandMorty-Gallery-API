import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

export function CharacterCard({ name, image, type, status, gender, species }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "30em",
        fontFamily: "Poppins",
        color: "white",
        backgroundColor: "#1E361C",
        border: "2px solid #1E361C",
        cursor: "pointer",
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
        image={image}
        title="Character"
      />
      <CardContent color="green">
        <Typography gutterBottom variant="h6" component="div">
          <b>Name: </b>
          {name}
        </Typography>
        <Typography gutterBottom variant="h9" component="div">
          <b>Gender: </b>
          {gender}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          <b>Type: </b>
          {type !== "" ? type : "Common"}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          <b>Species: </b>
          {species}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          <b>Status: </b>
          {status}
        </Typography>
      </CardContent>
    </Card>
  );
}
