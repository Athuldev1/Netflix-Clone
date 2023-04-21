import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import "./RowPost.css";
import axios from "../../Components/axios";
import { API_KEY, imageUrl } from "../../Constants/Constants";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    });
  }, [props.url]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US `) 
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("Trailer not available");
        }
      });
  };

  return (
    <div className="row">
      <h2> {props.title} </h2>
      <div className="posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleMovie(movie.id)}
            key={movie.id}
            className={props.isSmall ? "smallPoster" : "poster"}
            alt={movie.title}
            src={`${imageUrl}/${movie.poster_path}`}
          />
        ))}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;
