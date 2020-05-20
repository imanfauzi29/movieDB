import Data from "./data/movies-data.js";
import alertMessage from "./alert-message.js";
import "./components/layouts/card-movie-list.js";
import "./font-awesome.js";

const baseUrl = 'https://api.themoviedb.org/3';
const key = '18b6ac76ada34bba374b08f5932d3416';

const content = document.getElementById('content');
const target = document.getElementById('movie-list');


const urls = [
getMovie('movie/popular'),
getMovie('movie/upcoming'),
getMovie('movie/top_rated'),
];

const getPath = urls;

function getMovie(pathname) {
	return `${baseUrl}/${pathname}?api_key=${key}`;
}

const getSubHeading = getPath.map(item => {
	const newURL = new URL(item);
	const pathname = newURL.pathname
	.split('/')[3]
	.replace('_', ' ');
	return pathname + ' movie';
})

const movieList = urls.map(async url => {
	try{
		const response = await fetch(`${url}`);
		return response.json();
	}catch(e) {
		alertMessage(e)
	}
})

const mainMovie = () => {
	Promise.all(movieList)
	.then(results => {
		movie(results)
	})
}

const elements = () => {
	return `
	<div class="container-fluid mt-5">
	<bs-heading></bs-heading>
	<card-list></card-list>
	</div>`
}

const movie = results => {
	for(let i = 0; i < results.length; i++) {
		// set elements inside content
		content.innerHTML += elements();
		const titleHeading = document.querySelectorAll('bs-heading');
		titleHeading[i].title = getSubHeading[i];

		const cardList = document.querySelectorAll('card-list');
		cardList[i].movies = results[i].results;
	}
}


export default mainMovie;