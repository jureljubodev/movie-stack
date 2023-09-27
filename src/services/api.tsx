export const API_KEY = "99c68bc92809ad2563b22c1a9262cad9";
export const BASE_URL = "https://api.themoviedb.org/3";
export const LANGUAGE_URL = `&language=en-US`

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&adult=false`,
  fetchComingSoon: `/discover/movie?api_key=${API_KEY}&with_networks=213&adult=false`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&adult=false`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28&adult=false`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35&adult=false`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27&adult=false`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749&adult=false`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99&adult=false`,
  fetchBySearchURL: `/search/movie?query=`,
  endingBySearchURL: `&api_key=${API_KEY}&language=en-US&adult=false`,
  fetchByMovieId: `/movie/?api_key=${API_KEY}`
};

