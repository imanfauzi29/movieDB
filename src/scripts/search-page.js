

const content = document.getElementById('content');

const elements = () => {
	content.innerHTML = '';
	return `
	<div class="container-fluid mt-5">
	<bs-heading></bs-heading>
	<card-list class="row" column></card-list>
	</div>`
}

function searchResults(results) {
	content.innerHTML = elements();

	const cardList = document.querySelector('card-list');
	cardList.movies = results;
	console.log(cardList);
}

export default searchResults;