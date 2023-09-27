import { Link } from "react-router-dom";
import MovieSearchDropDown from "./components/MovieSearchDropDown/MovieSearchDropDown.tsx";
import { useGetMoviesMutation } from "./services/movieApi.ts";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { HomeWrapper, HomeHeading, HomeButton } from "./styles/HomeStyles.ts";

function App() {
  const searchQuery = useSelector((state: any) => state.searcher.searchQuery);

  const [query, setQuery] = useState("");
  const [getMovies, { data }] = useGetMoviesMutation();

  useEffect(() => {
    setQuery(searchQuery);
    fetchMovie();
  }, [searchQuery, query]);

  const fetchMovie = async () => {
    await getMovies({ query });
  };
  return (
    <>
      <HomeWrapper>
        <MovieSearchDropDown data={data} />
        <HomeHeading>Your Ultimate Movie Streaming Destination</HomeHeading>
        <Link to="/Discover">
          <HomeButton>Discover</HomeButton>
        </Link>
      </HomeWrapper>
    </>
  );
}

export default App;
