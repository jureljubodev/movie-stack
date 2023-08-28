import axios from "axios";
import { API_KEY } from "../../services/api";
import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";

const MovieSearch = () => {
  let SEARCH_PROMPT = localStorage.getItem("searchParam");
  let fetchBySearchURL = `https://api.themoviedb.org/3/search/movie?query=${SEARCH_PROMPT}&api_key=99c68bc92809ad2563b22c1a9262cad9&language=en-US`;
  const [searchArray, setSearchArray] = useState([]);

  const getMoviesBySearch = async (url: string) => {
    await axios({
      url: url,
      params: {
        api_key: API_KEY,
      },
    }).then((response) => {
      setSearchArray(response.data.results);
    });
  };

  useEffect(() => {
    getMoviesBySearch(fetchBySearchURL);
  }, [searchArray]);

  return (
    <div className="min-w-screen w-screen min-h-screen h-full bg-[#060D17] text-white flex flex-wrap px-16">
      {searchArray.map((movie: any) => {
        return (
          <MovieCard
            key={movie.id}
            id={movie.id}
            originalTitle={movie.original_title}
            overview={movie.overview}
            posterPath={movie.poster_path}
            releaseDate={movie.release_date}
          />
        );
      })}
    </div>
  );
};

export default MovieSearch;
