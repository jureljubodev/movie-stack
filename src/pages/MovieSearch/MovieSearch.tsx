import { useState, useEffect, CSSProperties } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useSelector } from "react-redux";
import { useGetMoviesMutation } from "../../services/movieApi";
import ClipLoader from "react-spinners/ClipLoader";
import { MovieSearchWrapper, yellowColor } from "./MovieSearchStyles";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const MovieSearch = () => {
  const searchQuery = useSelector((state: any) => state.searcher.searchQuery);
  const [query, setQuery] = useState("");
  const [getMovies, { data, isLoading }] = useGetMoviesMutation();

  useEffect(() => {
    setQuery(searchQuery);
    fetchMovie();
  }, [searchQuery, query]);

  const fetchMovie = async () => {
    await getMovies({ query });
  };

  if (document.readyState !== "complete") {
    return (
      <ClipLoader
        color={yellowColor}
        loading={isLoading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  } else {
    if (data?.results?.length > 0) {
      return (
        <>
          <MovieSearchWrapper>
            {data.results.map((movie: any) => {
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
          </MovieSearchWrapper>
        </>
      );
    }
  }
};

export default MovieSearch;
