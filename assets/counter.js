class CounterComponent extends HTMLElement {
  constructor() {
    super();
    this._count = 0; // Initial state
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  get count() {
    return this._count;
  }

  set count(value) {
    console.log(`value: ${value}`)
    this._count = value;
    this.render(); // Re-render the component when count changes
  }

  _increment() {
    this.count++; // This will trigger the setter, updating the count and re-rendering the component.
  }

  _decrement() {
    this.count--; // This will trigger the setter, updating the count and re-rendering the component.
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        /* Example of encapsulated styles */
        div {
          border: 1px solid black;
          padding: 10px;
        }
      </style>
      <div>
        <p>Count: ${this._count}</p>
        <button id="increment">+1</button>
        <button id="decrement">-1</button>
      </div>
    `;

    // Now that the button is part of the DOM, we can safely attach the event listener
    this.shadowRoot.querySelector('#increment').addEventListener('click', this._increment.bind(this));
    this.shadowRoot.querySelector('#decrement').addEventListener('click', this._decrement.bind(this));
  }
}

customElements.define('counter-component', CounterComponent);
