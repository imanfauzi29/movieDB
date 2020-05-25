import "./font-awesome.js";
import MovieUrl from "./data/movie-url.js";
import detail from "./detail-page.js";
import "./components/card-movie-list.js";

// get url data main page
const urls = [MovieUrl.url('movie/popular'), MovieUrl.url('movie/top_rated'), MovieUrl.url('movie/upcoming')];

export const mainMovie = () => {
  // get sub title
  const getSubHeading = urls.map(item => {
    const newURL = new URL(item);
    const pathname = newURL.pathname.split('/')[3].replace('_', ' ');
    return `${pathname} movie`;
  })

  // Promise all url
  return Promise.all(urls.map(url =>
  // fetch url with url map
  fetch(url)
  .then(res => res.json())
  .then(resJson => resJson)
  .catch(e => console.log(e))))
  // render movie
  .then(movies => {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    movies.forEach((movie, i) => {
      content.innerHTML += `
			<div class="container-fluid mt-4 py-3 list-movie">
			<bs-heading></bs-heading>
			<card-list class="d-flex overflow-x-scroll"></card-list>
			</div>`

      const heading = document.querySelectorAll('bs-heading');
      heading[i].title = getSubHeading[i];

      const cardList = document.querySelectorAll('card-list');
      cardList[i].movies = movie.results;
    })
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
  });
}

mainMovie();

export default mainMovie;
