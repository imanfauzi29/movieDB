
class SearchBar extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({mode: "open"})
	}
	connectedCallback() {
		this.render();
	}

	set clickButton(event) {
		this._clickButton = event;
		this.render();
	}

	set clickEnter(event) {
		this._clickEnter = event;
		this.render();
	}

	get searchValue() {
		return this.shadowRoot.querySelector('#search').value;
	}

	render() {
		this.shadowRoot.innerHTML = `
		<style>
		@media (min-width: 992px) {
			:host{
				width: 100%;
				margin: 0 2.75rem;
			}
		}

		@media (max-width: 992px) {
			:host {
				width: calc(100% - 200px);
				margin: 0 1rem;
			}
		}

		:host {
			position: relative;
			display: inline-block;
			margin: 0 2rem	;
		}

		:host input {
			width: 100%;
			border-radius: 3px;
			border: 0;
			line-height: 30px;
			padding-left: 10px;
			color: #626262;
			transition: .3s ease;
		}

		:host input:focus {
			box-shadow: 0 0 1px 2px #0fb48c;
		}

		:host .icon-search-box {
			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
			background: none;
			outline: none;
			border: none;
			padding-right: 15px;
			padding-top: 2px;
			cursor: pointer;
		}

		.icon-search {
			position: relative;
			height: 100%;
			display: inline-block;
		}

		.icon-search::before {
			content: '';
			position: absolute;
			width: .5rem;
			height: .5rem;
			border: 3px solid #626262;
			border-radius: 50%;
			top: 0;
			right: 0;
			transform: translate(0, 5px);
		}

		.icon-search::after {
			content: '';
			position: absolute;
			width: 3px;
			height: 8px;
			background-color: #626262;
			top: 0;
			right: 0;
			transform: translate(2px, 15px) rotate(-45deg);
		}

		</style>
		<div class="search-box">
		<input type="text" name="search" id="search" class="search-input" placeholder="search here...">
		<div class="icon-search-box" id="icon-btn">
		<span class="icon-search"></span>
		</div>
		</div>
		`

		this.shadowRoot.querySelector('#icon-btn')
		.addEventListener('click', this._clickButton);

		this.shadowRoot.querySelector('#search')
		.addEventListener('keydown', event => {
			if(event.keyCode == 13) {
				return this._clickEnter;
			}
		})
	}

}

customElements.define('search-bar', SearchBar)