import { Link } from "react-router-dom";

export interface IMovieCardProps {
  id: number;
  originalTitle: string;
  overview: string;
  posterPath: string;
  releaseDate: string;
}

export const posterURL: string = "https://image.tmdb.org/t/p/original";

const MovieCard: React.FC<IMovieCardProps> = (props): JSX.Element => {
  return (
    <Link to={`/${props.id}`}>
      <div className="flex-none w-[250px]">
        <img
          className="h-3/4 w-auto rounded"
          src={posterURL + props.posterPath}
          alt="movie_poster"
        />
        <h1>{props.originalTitle}</h1>
      </div>
    </Link>
  );
};

export default MovieCard;
