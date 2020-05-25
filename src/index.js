import "bootstrap/dist/css/bootstrap.css";

import "./styles/style.css";

import "./scripts/main-page.js";
import MovieUrl from "./scripts/data/movie-url.js";
import searchPage from "./scripts/search-page.js";
import "./scripts/components/detail-custom.js";

document.addEventListener("DOMContentLoaded", () => {
  const url = MovieUrl.url('search/movie');
	const searchElement = document.querySelector('#search');
	const buttonElement = document.querySelector('#icon-btn');

  searchElement.value = '';

  const DataSearch = () => {
    if (searchElement.value != '' || null) {
      searchPage(url, searchElement.value)
    } else {
      return;
    }
  }

// search on enter keydown
  searchElement.addEventListener('keydown', event => {
    if (event.keyCode == 13) {
      DataSearch();
    }
  })

	// search onButtonClicked
  buttonElement.addEventListener('click', DataSearch);

})
