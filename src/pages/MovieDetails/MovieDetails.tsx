import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../../services/api";
import { BiArrowBack } from "react-icons/bi";
import { basicUrlSnips } from "../../utils/env-exporter";
import { useNavigate } from "react-router";
import {
  DefaultDiv,
  MovieDetailsButton,
  MovieDetailsHeading,
  MovieDetailsImg,
  MovieDetailsInnerWrapper,
  MovieDetailsParagraph,
  MovieDetailsTextWrapper,
  MovieDetailsWrapper,
} from "./MovieDetailsStyles";

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
  const idHolder = window.location.href.replace("http://localhost:5173/", "");
  const [alreadyFav, setAlreadyFav] = useState(false);
  let arrayAsStrings = localStorage.getItem("favoriteMovies");

  const saveToLocal = () => {
    if (arrayAsStrings === "") {
      let arrayAsArray = arrayAsStrings.split("");
      arrayAsArray.push(idHolder);
      localStorage.setItem("favoriteMovies", arrayAsArray.toString());
      setAlreadyFav(true);
    } else if (arrayAsStrings != "") {
      console.log("started")
      let arrayAsArray = arrayAsStrings?.split(",");
      arrayAsArray?.push(idHolder);
      localStorage.setItem("favoriteMovies", arrayAsArray.toString());
      setAlreadyFav(true);
    }
  };

  const removeFromLocal = () => {
    let arrayAsArray = arrayAsStrings?.split(",");
    const arrayWithoutCurr: any = arrayAsArray?.filter(function (id) {
      return id !== idHolder;
    });
    localStorage.setItem("favoriteMovies", arrayWithoutCurr.toString());
    setAlreadyFav(false);
  };

  const checkIfInFav = () => {
    let arrayAsArray = arrayAsStrings?.split(",");
    if (arrayAsArray?.includes(idHolder)) {
      setAlreadyFav(true);
    }
  };

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
    checkIfInFav();
    getMovieById(
      `https://api.themoviedb.org/3/movie/${idHolder}?language=en-US`
    );
  }, []);

  return (
    <MovieDetailsWrapper>
      <MovieDetailsImg
        src={basicUrlSnips.posterURL + currMovie.poster_path}
        alt="movie_poster"
      />
      <MovieDetailsInnerWrapper>
        <MovieDetailsHeading>{currMovie.title}</MovieDetailsHeading>
        <MovieDetailsTextWrapper>
          <MovieDetailsParagraph>{currMovie.overview}</MovieDetailsParagraph>
          <MovieDetailsParagraph>
            Release Date: {currMovie.release_date}
          </MovieDetailsParagraph>
          <DefaultDiv>
            {alreadyFav ? (
              <MovieDetailsButton onClick={() => removeFromLocal()}>
                In favorites
              </MovieDetailsButton>
            ) : (
              <MovieDetailsButton onClick={() => saveToLocal()}>
                Favourite
              </MovieDetailsButton>
            )}
          </DefaultDiv>
          <MovieDetailsButton onClick={() => navigate(-1)}>
            <BiArrowBack className="back-arrow" />
          </MovieDetailsButton>
        </MovieDetailsTextWrapper>
      </MovieDetailsInnerWrapper>
    </MovieDetailsWrapper>
  );
};

export default MovieDetails;
