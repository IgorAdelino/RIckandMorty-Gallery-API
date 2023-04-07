import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { Container } from "@mui/material";
import style from "./Gallery.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import { Link } from "react-router-dom";

export function Gallery() {
  const [characters, setCharacter] = useState([]);
  useEffect(() => {
    getCharacter();
  }, []);
  const { id } = useParams();

  const getCharacter = async () => {
    var endpoints = [];
    for (let i = 1; i < 34; i++) {
      endpoints.push(`https://rickandmortyapi.com/api/character/${i}/`);
    }
    //console.log(endpoints)
    var response = axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setCharacter(res)) // setei o character
      .catch((err) => console.log(err));

    return response;
  };

  const characterFilter = (name) => {
    var filteredCharacters = [];
    if (name === "") {
      getCharacter();
    }
    characters.map((character) => {
      if (character.data.name.includes(name)) {
        filteredCharacters.push(character);
      }
    });

    setCharacter(filteredCharacters);
  };
  return (
    <>
      <SearchBar characterFilter={characterFilter} />
      <div className={style.primaryView}>
        <Container className={style.Container}>
          <h1>Characters</h1>

          <Container maxWidth="false" height="100vh">
            <Grid container spacing={3}>
              {characters.map((character, index) => (
                <Grid item xs={4} key={index}>
                  <Link to={`/CharacterDetails/${character.data.id}`}>
                  <CharacterCard
                    image={character.data.image}
                    name={character.data.name}
                    gender={character.data.gender}
                    type={character.data.type}
                    species={character.data.species}
                    status={character.data.status}
                  />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Container>
      </div>
    </>
  );
}
