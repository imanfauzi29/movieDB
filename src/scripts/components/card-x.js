class CardX extends HTMLElement {
	set movie(movie){
		this._movie = movie;
		this.render();
	}

	render() {
		this._movie.forEach(movie => {
			this.innerHTML +=`
			<a href="#" data-id="${movie.id}">
			<div class="overflow-x mx-2">
			<div class="card">
			<img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="card-img-top" alt="${movie.title}">
			<div class="card-body">
			<h5 class="card-title">${movie.original_title}</h5>
			<h6 class="card-subtitle"><i class="fa fa-star text-warning"></i> ${movie.vote_average}</h6>
			</div>
			</div>
			</a>
			`	
		})
	}
}

customElements.define('card-x', CardX);