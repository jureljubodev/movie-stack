import MovieCard from "../MovieCard/MovieCard";
import { useGlobalState } from "../../context/movieContext";

const HorizontalContainerHorror = () => {
  const { stateHorror } = useGlobalState();
  if (Array.isArray(stateHorror)) {
    return (
      <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory text-white ml-8 py-4 gap-5 scroll-smooth">
        {stateHorror.map((movie) => {
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
  } else {
    return <h1>Loading</h1>;
  }
};

export default HorizontalContainerHorror;
