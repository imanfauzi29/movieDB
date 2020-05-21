import $ from "jquery";
import MoviesData from "./data/movies-data.js";
import getMovie from "./main-page.js";
import searchPage from "./search-page.js";
import loader from "./loader.js";

const content = document.getElementById('content');
const urls = MoviesData.url('search/movie');

const main = () => {
	const searchElement = document.querySelector('search-bar');

	const onButtonClicked = async () => {

		if(searchElement.searchValue != '' || null) {
			
			try{
				content.innerHTML = '';
				content.innerHTML = loader();
				const SearchQuery = await MoviesData.searchQuery(urls, searchElement.searchValue);
				searchPage(SearchQuery)
			}catch(e) {
				searchPage(e)
			}

		}else {
			return;
		}
	}
	searchElement.clickButton = onButtonClicked;

}

export default main;