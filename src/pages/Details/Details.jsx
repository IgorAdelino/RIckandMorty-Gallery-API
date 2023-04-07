import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { Container } from "@mui/material";
import style from "./Details.module.css";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export function Details() {
  const [details, setDetails] = useState([]);
  const [results, setResults] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function getDetails() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/episode/${id}`
      );
      const data = await response.json();
      setDetails(data);

      let characterResult = await Promise.all(
        data.characters.map((item) => {
          return fetch(item).then((res) => res.json());
        })
      );
      setResults(characterResult);
    }
    getDetails();
  }, []);

  return (
    <>
      <NavBar />
      <div className={style.primaryView}>
        <Container className={style.Container}>
          <div className={style.firstView}>
          <div>
            <h1>Episode</h1>
            <h2>{details.episode}</h2>
            <img className={style.titleimg} src="/assets/pickle_rick.jpeg" />
          </div>
          <div className={style.info}>
            <div>
              <h2 className={style.titles}>Name</h2>
              <h3>{details.name}</h3>
            </div>
            <div>
              <h2 className={style.titles}>Release date</h2>
              <h3>{details.air_date}</h3>
            </div>
            <div>
            </div>
              <h2 className={style.titles}>Participating characters</h2>
              <br/>
              <Grid container spacing={7}>
                {results.map((item, index) => (
                  <Grid item xs={6} key={index}>
                  <Link to={`/CharacterDetails/${item.id}`}>
                    <CharacterCard
                      image={item.image}
                      name={item.name}
                      gender={item.gender}
                      type={item.type}
                      species={item.species}
                      status={item.status}
                    />
                    </Link>  
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
