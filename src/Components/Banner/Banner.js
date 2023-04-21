import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../Constants/Constants";
import axios from "../../Components/axios";
import "./Banner.css";

function Banner() {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newIndex = (currentMovieIndex + 1) % movies.length;
      setCurrentMovieIndex(newIndex);
    }, 50000);

    return () => clearTimeout(timer);
  }, [currentMovieIndex, movies.length]);

  const currentMovie = movies[currentMovieIndex];

  return (
    <div
      style={{
        backgroundImage: `url(${currentMovie ? imageUrl + currentMovie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{currentMovie ? currentMovie.title : ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{currentMovie ? currentMovie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
