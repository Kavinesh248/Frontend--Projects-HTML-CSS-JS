import "core-js/stable";
import "regenerator-runtime";

import { API_KEY } from "./helpers.js";

export const state = {
  home: {
    genre: [],
    banner: [],
    topRatedMovie: [],
    trendingMovie: [],
    upComingMovies: [],
  },
};

export const loadGenre = async function () {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );

    const data = await res.json();

    if (!res.ok) throw new Error(res.status);
    state.home.genre = data.genres;
  } catch (err) {
    console.error(err);
  }
};
