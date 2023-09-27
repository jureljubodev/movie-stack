import HorizontalContainer from "../../components/HorizontalContainer/HorizontalContainer";
import FavouriteDropDown from "../../components/FavouriteDropDown/FavouriteDropDown";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import {
  useGetHorrorMoviesMutation,
  useGetActionMoviesMutation,
  useGetComedyMoviesMutation,
  useGetTrendingMoviesMutation,
  useGetMoviesMutation,
} from "../../services/movieApi";
import MovieSearchDropDown from "../../components/MovieSearchDropDown/MovieSearchDropDown";
import { useSelector} from "react-redux";
import { useState, useEffect } from "react";
import { DiscoveryWrapper } from "./DiscoveryStyles";

const Discovery = () => {
  const [getMovies, { data: searchData }] = useGetMoviesMutation();
  const [getHorrorMovies, { data: horrorData }] = useGetHorrorMoviesMutation();
  const [getActionMovies, { data: actionData }] = useGetActionMoviesMutation();
  const [getComedyMovies, { data: comedyData }] = useGetComedyMoviesMutation();
  const [getTrendingMovies, { data: trendingData }] =
    useGetTrendingMoviesMutation();
  const emptyQuery = "";
  const [query, setQuery] = useState("");

  const searchQuery = useSelector((state: any) => state.searcher.searchQuery);
  const fetchMovieSearch = async () => {
    await getMovies({ query });
  };

  useEffect(() => {
    fetchMovie();
  }, [emptyQuery]);

  useEffect(() => {
    setQuery(searchQuery);
    fetchMovieSearch();
  }, [searchQuery]);

  const fetchMovie = async () => {
    await getHorrorMovies(emptyQuery);
    await getActionMovies(emptyQuery);
    await getComedyMovies(emptyQuery);
    await getTrendingMovies(emptyQuery);
  };

  return (
    <DiscoveryWrapper>
      <MovieSearchDropDown data={searchData} />
      <SectionHeading text="Newest" icon="🆕" />
      <HorizontalContainer data={trendingData} />
      <SectionHeading text="Popular Horrors" icon="🎉" />
      <HorizontalContainer data={horrorData} />
      <SectionHeading text="Popular Action" icon="🎉" />
      <HorizontalContainer data={actionData} />
      <SectionHeading text="Popular Comedy" icon="🎉" />
      <HorizontalContainer data={comedyData} />
      <SectionHeading text="Favorites" icon="💙" />
      <FavouriteDropDown />
    </DiscoveryWrapper>
  );
};

export default Discovery;
