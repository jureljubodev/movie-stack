import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import Discovery from "./pages/Discovery/Discovery.tsx";
import "./styles/index.css";
import Navbar from "./components/Navbar/Navbar.tsx";
import MovieDetails from "./pages/MovieDetails/MovieDetails.tsx";
import MovieSearch from "./pages/MovieSearch/MovieSearch.tsx";
import {store} from './app/store.ts';
import { Provider } from "react-redux";

if(localStorage.getItem("favoriteMovies") === null) {
  localStorage.setItem("favoriteMovies", "")
} else {
  console.log("Local storage loaded.")
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <Provider store={store} >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Discover" element={<Discovery />} />
          <Route path="/movie-search" element={<MovieSearch />} />
          <Route path={"/:movieId"} element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
      </Provider>
  </React.StrictMode>
);
