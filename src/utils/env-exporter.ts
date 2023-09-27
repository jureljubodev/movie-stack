export const basicUrlSnips = {
  baseUrl: import.meta.env.VITE_BASE_API_URL,
  apiKey: import.meta.env.VITE_API_KEY,
  languageSnip: import.meta.env.VITE_LANGUAGE_SNIP,
  adultFalseSnip: import.meta.env.VITE_ADULT_FALSE_SNIP,
  releaseDateStSnip: import.meta.env.VITE_RELEASE_DATE_ST_SNIP,
  releaseDateEnSnip: import.meta.env.VITE_RELEASE_DATE_EN_SNIP,
  firstFilterSnip: import.meta.env.VITE_FIRST_FILTER_SNIP,
  genreFilterSnip: import.meta.env.VITE_GENRE_FILTER_SNIP,
  posterURL: import.meta.env.VITE_POSTER_URL,
  placeholderImg: import.meta.env.VITE_PLACEHOLDER_IMG,
};

export const requestsList = {
  fetchTrending: `/trending/all/week?api_key=${basicUrlSnips.apiKey}${basicUrlSnips.languageSnip}${basicUrlSnips.adultFalseSnip}`,
  fetchComingSoon: `/discover/movie?api_key=${basicUrlSnips.apiKey}&with_networks=213${basicUrlSnips.adultFalseSnip}`,
  fetchTopRated: `/movie/top_rated?api_key=${basicUrlSnips.apiKey}${basicUrlSnips.languageSnip}${basicUrlSnips.adultFalseSnip}`,
  fetchActionMovies: `/discover/movie?api_key=${basicUrlSnips.apiKey}${basicUrlSnips.languageSnip}&with_genres=28${basicUrlSnips.adultFalseSnip}`,
  fetchComedyMovies: `/discover/movie?api_key=${basicUrlSnips.apiKey}${basicUrlSnips.languageSnip}&with_genres=35${basicUrlSnips.adultFalseSnip}`,
  fetchHorrorMovies: `/discover/movie?api_key=${basicUrlSnips.apiKey}${basicUrlSnips.languageSnip}&with_genres=27${basicUrlSnips.adultFalseSnip}`,
  fetchRomanceMovies: `/discover/movie?api_key=${basicUrlSnips.apiKey}${basicUrlSnips.languageSnip}&with_genres=10749${basicUrlSnips.adultFalseSnip}`,
  fetchDocumentaries: `/discover/movie?api_key=${basicUrlSnips.apiKey}${basicUrlSnips.languageSnip}&with_genres=99${basicUrlSnips.adultFalseSnip}`,
  fetchBySearchURL: `/search/movie?query=`,
  endingBySearchURL: `&api_key=${basicUrlSnips.apiKey}${basicUrlSnips.languageSnip}${basicUrlSnips.adultFalseSnip}`,
  fetchByMovieId: `https://api.themoviedb.org/3/movie/`,
  fetchByFilter: `/discover/movie?api_key=${basicUrlSnips.apiKey}&with_original_language=`,
};
