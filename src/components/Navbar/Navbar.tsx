import { AiOutlineSearch } from "react-icons/ai";
import logo from "../../assets/movie-stack_logo.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmount } from "../../app/searchParamSlice";
import { useEffect, useState } from "react";
import { useGetMoviesMutation } from "../../services/movieApi";
import {
  NavbarWrapper,
  Logo,
  NavbarUl,
  NavbarLi,
  SearchBarWrapper,
  SearchInput,
  SearchButton,
} from "./NavbarStyles";

const Navbar = () => {
  const searchQuery = useSelector((state: any) => state.searcher.searchQuery);
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const [getMovies] = useGetMoviesMutation();

  useEffect(() => {
    setQuery(searchQuery);
    fetchMovie();
  }, [searchQuery, query]);

  const fetchMovie = async () => {
    await getMovies({ query });
  };

  return (
    <NavbarWrapper>
      <Link to="/" className="router-block">
        <Logo src={logo} alt="logo" />
      </Link>
      <NavbarUl>
        <Link to="/">
          <NavbarLi>Home</NavbarLi>
        </Link>
        <Link to="/Discover">
          <NavbarLi>Dicover</NavbarLi>
        </Link>
      </NavbarUl>
      <SearchBarWrapper>
        <AiOutlineSearch className="search-icon" />
        <SearchInput
          placeholder="Search..."
          type="text"
          onChange={(e) => dispatch(incrementByAmount(e.target.value))}
        />
        <Link to="/movie-search">
          <SearchButton>Search</SearchButton>
        </Link>
      </SearchBarWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
