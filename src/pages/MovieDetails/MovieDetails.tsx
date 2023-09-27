import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../../services/api";
import { posterURL } from "../../components/MovieCard/MovieCard";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router";

type MovieDetails = {
  id?: number;
  title?: string;
  poster_path?: string;
  overview?: string;
  release_date?: string;
};

const MovieDetails = () => {
  const navigate = useNavigate();
  const [currMovie, setCurrMovie] = useState<MovieDetails>({});

  const saveToLocal = () => {
    localStorage.setItem('favorites',  localStorage.getItem("favorites") + "," + currMovie.id.toString())
    console.log(localStorage.getItem("favorites"));
  }

  const getMovieById = async (url: string) => {
    await axios({
      url: url,
      params: {
        api_key: API_KEY,
      },
    }).then((response) => {
      setCurrMovie(response.data);
    });
  };

  useEffect(() => {
    const idHolder = window.location.href.replace("http://localhost:5173/", "");
    getMovieById(
      `https://api.themoviedb.org/3/movie/${idHolder}?language=en-US`
    );
    console.log(localStorage.getItem("favorites"))
  }, []);

  return (
    <div
      className={`max-w-screen h-screen bg-[#060D17] text-white overflow-x-hidden flex sm:flex-row flex-col justify-start align-center gap-8`}
    >
      <img
        src={posterURL + currMovie.poster_path}
        alt="movie_poster"
        className="w-1/3	 h-auto self-center"
      />
      <div className="flex justify-center flex-col gap-16">
        <h1 className="text-white text-4xl sm:text-6xl font-bold self-center text-center">
          {currMovie.title}
        </h1>
        <div className="md:w-4/6 self-center text-center px-8">
          <p className="self-center">{currMovie.overview}</p>
          <p className="self-center">Release Date: {currMovie.release_date}</p>
          <button onClick={() => saveToLocal()} className="min-w-full w-full sm:py-4 px-32 rounded-md mt-8 bg-[#10161D] border-2 border-transparent text-white hover:text-[#C69B00] hover:bg-transparent hover:border-2 hover:border-[#C69B00] ease-in-out duration-300 text-center">
            Favourite
          </button>
          <button
            onClick={() => navigate(-1)}
            className="min-w-full w-full sm:py-4 px-32 rounded-md mt-8 bg-[#10161D] border-2 border-transparent text-white hover:text-[#C69B00] hover:bg-transparent hover:border-2 hover:border-[#C69B00] ease-in-out duration-300 text-center"
          >
            <BiArrowBack className="w-full min-w-full" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
