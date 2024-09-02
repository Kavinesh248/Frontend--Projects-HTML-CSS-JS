import View from "./view.js";

class GenreView extends View {
  _errMessage = "Can't able to get the movie! Pleas try again later";
  _parentElement = document.querySelector(".main-container");

  addHandlerLoadGenre(handler) {
    window.addEventListener("load", function () {
      handler();
    });
  }

  _generateMarkup() {
    return `
    <nav class="section-sidebar">
      <p class="genre">Genre</p>
        <ul class="genre-lists">   
         ${this._data
           .map(
             (genre) =>
               `<li><a href="#" class="genre-link">${genre.name}</a></li>`
           )
           .join("")}
        </ul>
        <p class="genre">Language</p>
        <ul class="genre-lists">
          <li><a href="#" class="genre-link">English</a></li>
          <li><a href="#" class="genre-link">Tamil</a></li>
          <li><a href="#" class="genre-link">Spanish</a></li>
        </ul>
    </nav>
    
    `;
  }
}

export default new GenreView();
