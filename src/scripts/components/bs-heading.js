/* container */
class BsHeading extends HTMLElement {
	connectedCallback() {
		this.setAttribute('class', 'pl-2 mb-3 d-flex');
	}

	set title(value) {
		this._title = value;
		this.render();
	}

	render() {
		this.innerHTML = `<h4 class="text-capitalize font-weight-bold">${this._title}</h4>`;
	}

	attributeChangeCallback(name, oldValue, newValue) {
		this[name] = newValue;
	}

	static get observedAttributes() {
		return ['class', 'title'];
	}
};

customElements.define('bs-heading', BsHeading);