import MovieCard from "../MovieCard/MovieCard";
import DotLoader from "react-spinners/DotLoader";
import { CSSProperties, useState } from "react";
import { HorizontalContainerWrapper } from "./HorizontalContainerStyles";
import { yellowColor } from "../../pages/MovieSearch/MovieSearchStyles";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

interface IHorizontalContainerProps {
  data: any;
}

const HorizontalContainer: React.FC<IHorizontalContainerProps> = (
  props
): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  if (props.data?.results?.length > 0) {
    setTimeout(() => setIsLoading(!isLoading), 500);
    return (
      <HorizontalContainerWrapper>
        {props.data.results.map((movie: any) => {
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              originalTitle={movie.title}
              overview={movie.overview}
              posterPath={movie.poster_path}
              releaseDate={movie.release_date}
            />
          );
        })}
      </HorizontalContainerWrapper>
    );
  } else {
    return (
      <DotLoader
        color={yellowColor}
        loading={isLoading}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }
};

export default HorizontalContainer;
