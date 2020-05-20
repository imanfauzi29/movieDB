class CardItem extends HTMLElement {

	set list(movie) {
		this._movie = movie;
		this.render();
	}

	get class() {
		return this.getAttribute('class');
	}

	set class(newValue) {
		this.setAttribute('class', newValue);
	}

	render() {
			this.innerHTML =`
			<a href="#" data-id="${this._movie.id}">
			<div class="overflow-x mx-2">
			<div class="card text-wrap" style="width:8rem;">
			<img src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" class="card-img-top" alt="${this._movie.title}">
			<div class="card-body">
			<h5 class="card-title">${this._movie.title}</h5>
			<h6 class="card-subtitle"><i class="fa fa-star text-warning"></i> ${this._movie.vote_average}</h6>
			</div>
			</div>
			</a>
			`
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this[name] = newValue;
	}

	static get observedAttributes() {
		return ["class"];
	}
}

customElements.define('card-item', CardItem);