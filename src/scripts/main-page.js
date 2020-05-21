import "./font-awesome.js";
import MoviesData from "./data/movies-data.js";
import alertMessage from "./alert-message.js";
import "./components/card-movie-list.js";
import "./components/search-bar.js";

const content = document.getElementById('content');
const target = document.getElementById('movie-list');


const urls = [
MoviesData.url('movie/popular'),
MoviesData.url('movie/upcoming'),
MoviesData.url('movie/top_rated'),
];

const getPath = urls;

const getSubHeading = getPath.map(item => {
	const newURL = new URL(item);
	const pathname = newURL.pathname
	.split('/')[3]
	.replace('_', ' ');
	return `${pathname} movie`;
})

const movieList = urls.map(async url => {
	try{
		const response = await fetch(`${url}`);
		return response.json();
	}catch(e) {
		console.log("can't load data/invalid data");
	}
})

const elements = () => {
	content.innerHTML = '';
	return `
	<div class="container-fluid mt-5">
	<bs-heading></bs-heading>
	<card-list class="d-flex flex-row flex-nowrap overflow-x-scroll py-2"></card-list>
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

const mainMovie = () => {
	Promise.all(movieList)
	.then(results => {
		movie(results)
	})
}


export default mainMovie;