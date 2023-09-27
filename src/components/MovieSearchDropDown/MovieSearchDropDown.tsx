import React from "react";
import {
  MovieSearchDropDownLi,
  MovieSearchDropDownUl,
} from "./MovieSearchDropDownStlyes";
import { Link } from "react-router-dom";
import { DefaultDiv } from "../../pages/MovieDetails/MovieDetailsStyles";

interface IMovieSearchDropDownProps {
  data: any;
}

const MovieSearchDropDown: React.FC<IMovieSearchDropDownProps> = (
  props
): JSX.Element => {
  if (props.data?.results?.length > 0) {
    return (
      <MovieSearchDropDownUl>
        {props.data.results.slice(0, 3).map((movie: any) => {
          return (
            <Link to={`/${movie.id}`} key={movie.id}>
              <MovieSearchDropDownLi >
                {movie.title}
              </MovieSearchDropDownLi>
            </Link>
          );
        })}
      </MovieSearchDropDownUl>
    );
  } else {
    return <DefaultDiv></DefaultDiv>;
  }
};

export default MovieSearchDropDown;
