/* card-list */
customElements.define('card-list', class extends HTMLElement {

  get style() {
    return this.getAttribute('class')
  }

  set style(value) {
    this.setAttribute('class', value)
  }

  get column() {
    return this.getAttribute('column');
  }

  set column(column) {
    this.setAttribute('column', column)
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

  attributeChangeCallback(name, oldValue, newValue) {
    this[name] = newValue;
  }

  static get observedAttributes() {
    return ['class', 'column']
  }
});

/* card-item */
customElements.define('card-item', class extends HTMLElement {

  connectedCallback() {
    const movieList = document.querySelector('card-list');

    if (movieList.hasAttribute('column')) {
      this.setAttribute('class', 'col-sm-4 col-md-2')
    } else {
      this.setAttribute('class', 'mx-2')
    }
  }

  set list(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    const title = (this._movie.title.length >= 20)
      ? this._movie.title.substr(0, 20) + '...'
      : this._movie.title;

    console.log(this._movie.poster_path);
    this.innerHTML = `
  		<div class="card text-wrap" style="width:10rem">
  		<a class="description" href="#" data-id="${this._movie.id}">
  		<img src="https://image.tmdb.org/t/p/w185${this._movie.poster_path}" class="card-img-top" alt="${this._movie.title}">
  		</a>
  		<div class="card-body">
  		<h6 class="card-subtitle"><i class="fa fa-star text-warning"></i> ${this._movie.vote_average}</h6>
  		<a class="description" href="#" data-id="${this._movie.id}">
  		<h5 class="card-title">${title}</h5>
  		</a>
  		</div>
  		`;

  }
})

/* heading */
customElements.define('bs-heading', class extends HTMLElement {
  connectedCallback() {
    this.setAttribute('class', 'pl-2 mb-3 d-flex');
  }

  set title(value) {
    this._title = value;
    this.render();
  }

  render() {
    this.innerHTML = `<h4 class="text-capitalize text-light font-weight-bold">${this._title}</h4>`;
  }

  attributeChangeCallback(name, oldValue, newValue) {
    this[name] = newValue;
  }

  static get observedAttributes() {
    return ['title'];
  }
})
