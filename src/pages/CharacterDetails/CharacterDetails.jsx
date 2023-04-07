import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { Container } from "@mui/material";
import style from "./CharacterDetails.module.css";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";


export function CharacterDetails() {
  const [details, setDetails] = useState([]);
  const [results, setResults] = useState([]);
  

  const { id } = useParams();

  useEffect(() => {
    async function getDetails() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await response.json();
      setDetails(data);
      let episodeResult = await Promise.all(
        data.episode.map((item) => {
          return fetch(item).then((res) => res.json());
        })
      );
      setResults(episodeResult);

    }
    getDetails();
  }, []);
  
  console.log(details)
  return (
    <>
      <NavBar />
      <div className={style.primaryView}>
        <Container className={style.Container}>
          <div className={style.firstView}>
          <div>
            <h1>Character</h1>
            <h2>{details.name}</h2>
            <img className={style.titleimg} src={details.image} />
          </div>
          <div className={style.info}>
            <div>
              <h2 className={style.titles}>Name</h2>
              <h3>{details.name}</h3>
            </div>
            <div>
              <h2 className={style.titles}>Created in</h2>
              <h3>{details.created}</h3>
            </div>
            <div>
              <h2 className={style.titles}>Species</h2>
              <h3>{details.species}</h3>
            </div>
            <div>
              <h2 className={style.titles}>Gender</h2>
              <h3>{details.gender}</h3>
            </div>
            <div>
              <h2 className={style.titles}>Type</h2>
              <h3>{details.type==""?"Common":details.type}</h3>
            </div>
            <div>
              <h2 className={style.titles}>Status:</h2>
              <h3>{details.status}</h3>
            </div>
            <div>
              <h2 className={style.titles}>Appearances in episodes</h2>
              </div>
              <br/>
              <Grid className={style.Grid} container spacing={1}>
                {results.map((item, index) => (
                  <Grid item xs={2} key={index}>
                  <Link to={`/Details/${item.id}`}>
                
                      <h2>{item.episode}</h2>

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