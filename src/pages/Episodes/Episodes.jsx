import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { EpisodeCard } from "../../components/EpisodeCard/EpisodeCard";
import { Container } from "@mui/material";
import style from "../Gallery/Gallery.module.css";
import axios from "axios";
import EpisodeSearchBar from "../../components/EpisodeSearchBar/EpisodeSearchBar";
import { Link } from "react-router-dom";

export function Episodes() {
  const [episodes, setEpisode] = useState([]);

  useEffect(() => {
    getEpisode();
  }, []);

  const getEpisode = async () => {
    let endpoints = [];
    for (let i = 1; i < 32; i++) {
      endpoints.push(`https://rickandmortyapi.com/api/episode/${i}/`);
    }
    //console.log(endpoints)
    let response = axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setEpisode(res))
      .catch((err) => console.log(err));

    return response;
  };

  const episodeFilter = (name) => {
    let filteredEpisodes = [];
    if (name === "") {
      getEpisode();
    }
    episodes.map((episode) => {
      if (episode.data.name.includes(name)) {
        filteredEpisodes.push(episode);
      }
    });

    setEpisode(filteredEpisodes);
  };

  return (
    <>
      <EpisodeSearchBar episodeFilter={episodeFilter} />
      <div className={style.primaryView}>
        <Container className={style.Container}>
          <h1>Episodes</h1>

          <Container maxWidth="false" height="100vh">
            <Grid container spacing={3}>
              {episodes.map((episode, index) => (
                <Grid item xs={4} key={index}>
                  <Link to={`/details/${episode.data.id}`}>
                    <EpisodeCard
                      episode={episode.data.episode}
                      name={episode.data.name}
                      air_date={episode.data.air_date}
                    />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Container>
      </div>

      <p>OI</p>
    </>
  );
}
