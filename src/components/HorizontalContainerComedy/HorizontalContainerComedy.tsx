import MovieCard from "../MovieCard/MovieCard";
import { useGlobalState } from "../../context/movieContext";
import { GlobalStateInterface } from "../../context/movieContext";


const HorizontalContainerComedy = () => {
  const { stateComedy } = useGlobalState();
  if (Array.isArray(stateComedy)) {
    return (
      <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory text-white ml-8 py-4 gap-5 scroll-smooth">
        {stateComedy.map((movie) => {
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
    return (<h1>Loading</h1>)
  }
};

export default HorizontalContainerComedy;