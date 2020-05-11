class BsButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  get type() {
    let value = '';
    value = this.hasAttribute("button")||this.hasAttribute("reset");
    if(value) {
      this._type = value;
      this.render();
    }
  }

  get btn() {
    let value = '';
    const color = ['primary', 'secondary', 'danger', 'success', 'warning', 'info', 'light', 'dark', 'link'];
    value = this.hasAttribute("button")||this.hasAttribute("reset");
    if(value) {
      this._btn = value;
      this.render();
    }  }

  render() {
    this.innerHTML = `
      <button type="${this._type}" class="btn btn-${this._btn}">Primary</button>
    `
  }
}

customElements.define('bs-button', BsButton);
