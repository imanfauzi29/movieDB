customElements.define('genre-custom', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
  }

  set genre(genre) {
    this._genre = genre;
    this.render();
  }

  render() {
    const out = [];
    this._genre.forEach(genre => {
      const elem = `<a href="#">${genre.name}</a>`;
      out.push(elem);
    })

    this.shadowRoot.innerHTML = `
		<style>
		:host a {
			color: #fff;
			text-decoration: none;
		}
		:host a:hover {
			text-decoration: underline !important;
		}
		</style>
		${out.join(', ')}
		`
  }
})

customElements.define('keyword-custom', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
  }

  set keyword(keyword) {
    this._keyword = keyword;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
		<style>

			:host .keyword {
				padding: 5px 15px;
				border-radius: 50px;
				background-color: transparent;
				border: 1px solid #fff;
				margin: 4px 5px;
				display:inline-block;
				transition: .3s ease-in;
			}

			:host .keyword:hover {
				transform: scale(1.1);
			}

			:host a {
				text-decoration: none;
				color: #fff;
			}
			</style>`;

    this._keyword.forEach(keyword => {
      this.shadowRoot.innerHTML += `
			<span class="keyword"><a href="#">${keyword.name}</a></span>`;
    })
  }
})
