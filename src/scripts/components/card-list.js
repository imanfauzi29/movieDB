import "./card-item.js";

class CardList extends HTMLElement {
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
}

customElements.define('card-list', CardList);
