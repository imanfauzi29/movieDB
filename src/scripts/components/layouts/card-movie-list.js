/* card-list */
customElements.define('card-list', class extends HTMLElement {
	connectedCallback() {
		this.setAttribute('class', 'd-flex flex-row flex-nowrap overflow-x-scroll py-2');
	}

	set movies(movies) {
		this._movies = movies;
		this.render();
	}

	render() {
		this._movies.forEach(movie => {
			const cardItemElement = document.createElement('card-item');
			cardItemElement.list = movie;
			this.appendChild(cardItemElement);
		})
	}
});

/* card-item */
customElements.define('card-item', class extends HTMLElement {
	connectedCallback() {
		this.setAttribute('class', 'px-2');
	}

	set list(movie) {
		this._movie = movie;
		this.render();
	}

	render() {
		const title = (this._movie.title.length >= 20) ? this._movie.title.substr(0, 20) + '...' : this._movie.title;

		this.innerHTML =`
		<div class="card text-wrap" style="width:10rem">
		<a href="#" data-id="${this._movie.id}">
		<img src="https://image.tmdb.org/t/p/w185${this._movie.poster_path}" class="card-img-top" alt="${this._movie.title}">
		</a>
		<div class="card-body">
		<h6 class="card-subtitle"><i class="fa fa-star text-warning"></i> ${this._movie.vote_average}</h6>
		<a href="#" data-id="${this._movie.id}">
		<h5 class="card-title">${title}</h5>
		</a>
		</div>
		`
	}
})

