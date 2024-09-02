import "core-js/stable";
import "regenerator-runtime";

import * as model from "./model.js";
import genreView from "./views/genreView.js";
import moviesContentView from "./views/moviesContentView.js";

const controlHomePage = async function () {
  try {
    await model.loadGenre();

    genreView.render(model.state.home.genre);

    moviesContentView.render();
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  genreView.addHandlerLoadGenre(controlHomePage);
};

init();
