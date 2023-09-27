import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  DefaultHeading,
  MovieCardImg,
  MovieCardWrapper,
} from "./MovieCardStyles";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { basicUrlSnips } from "../../utils/env-exporter";

export interface IMovieCardProps {
  id: number;
  originalTitle: string;
  overview: string;
  posterPath: string;
  releaseDate: string;
}

const onImageError = (e: any) => {
  e.target.src = basicUrlSnips.placeholderImg;
};



const MovieCard: React.FC<IMovieCardProps> = (props): JSX.Element => {
  const [alreadyFav, setAlreadyFav] = useState(false);
  let arrayAsStrings = localStorage.getItem("favoriteMovies");
  let arrayAsArray: any = arrayAsStrings?.split(",");

  const checkIfInFav = () => {
    let idString = `${props.id}`;
    if (arrayAsArray?.includes(idString)) {
      setAlreadyFav(true);
    } else {
      setAlreadyFav(false);
    }
  };

  const saveToLocal = () => {
    let idString = `${props.id}`;
      arrayAsArray?.push(idString);
      localStorage.setItem("favoriteMovies", arrayAsArray.toString());
      setAlreadyFav(true);
  };

  const removeFromLocal = () => {
    let idString = `${props.id}`;
    const arrayWithoutCurr = arrayAsArray?.filter(function (id: string) {
      return id !== idString;
    });
    localStorage.setItem("favoriteMovies", arrayWithoutCurr.toString());
    setAlreadyFav(false);
  };

  useEffect(() => {
    checkIfInFav();
  }, []);

  return (
    <>
      <MovieCardWrapper>
        <Link to={`/${props.id}`}>
          <MovieCardImg
            src={
              props.posterPath ? basicUrlSnips.posterURL + props.posterPath : basicUrlSnips.placeholderImg
            }
            alt="movie_poster"
            onError={onImageError}
            loading="lazy"
          />
        </Link>
        <DefaultHeading>{props.originalTitle}</DefaultHeading>{" "}
        {alreadyFav ? (
          <AiFillStar className="outline-star" onClick={removeFromLocal}/>
        ) : (
          <AiOutlineStar className="fill-star" onClick={saveToLocal} />
        )}
      </MovieCardWrapper>
    </>
  );
};

export default MovieCard;
