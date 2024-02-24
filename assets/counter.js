class CounterComponent extends HTMLElement {
  constructor() {
    super();
    this._count = 0; // Initial state
  }

  connectedCallback() {
    this.render();
    this.addEventListener('click', this._increment.bind(this));
  }

  get count() {
    return this._count;
  }

  set count(value) {
    this._count = value;
    this.render();
  }

  _increment() {
    this.count++;
  }

  render() {
    this.innerHTML = `
      <div>
        <p>Count: ${this.count}</p>
        <button>+1</button>
      </div>
    `;
  }
}

customElements.define('counter-component', CounterComponent);
