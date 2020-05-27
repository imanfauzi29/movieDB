import detail from "./detail-page.js";
import MovieUrl from "./data/movie-url.js";

const content = document.getElementById('content');

/* Search Query */
const url = (url, keyword) => {

  fetch(`${url}&language=en-US&query=${keyword}&page=1&include_adult=false`)
  .then(response => response.json())
  .then(responseJson => {

		// if result more then 0
    if (responseJson.results.length > 0) {
      return Promise.resolve(responseJson.results);
    } else {
      return Promise.reject(errorMessage(keyword))
    }

  })
  .then(results => {

    content.innerHTML = '';
    searchResults(results, keyword);
  })
  /* then show description movie */
  .then(() => {
    const cardItem = document.querySelectorAll('card-item a');
    cardItem.forEach(item => {
      item.addEventListener('click', () => {
        const url = [
        MovieUrl.url(`movie/${item.dataset.id}`),
        MovieUrl.url(`movie/${item.dataset.id}/keywords`)
        ];
        detail(url);
      })
    })
  })
}

// render result
const searchResults = (results, keyword) => {

  content.innerHTML = '';
  content.innerHTML = `
  <div class="container-fluid mt-5 list-movie">
  <div class="mb-4" style="font-size: 1.75rem; font-weight: bold; text-transform: capitalize;">result keyword: ${keyword}</div>
  <card-list class="row" column></card-list>
  </div>`

  const cardList = document.querySelector('card-list');
  cardList.movies = results;

}

// show error if keyword not found
const errorMessage = keyword => {

  content.innerHTML = `
  <div class="container-fluid mt-5 list-movie">
  <div class="mb-4" style="font-size: 1.75rem; font-weight: bold; text-transform: capitalize;">result keyword: ${keyword}</div>
  <div class="search-not-found">Ooppss! ${keyword} not found! </div>
  </div>
  `

}

export default url;
