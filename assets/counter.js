class CounterComponent extends HTMLElement {
  constructor() {
    super();
    this._count = 0; // Initial state
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  // This  method invokes whenever the count property is accessed. `count` acts as a getter for the `_count` property.
  get count() {
    return this._count;
  }

  // This method invokes whenever the count property is updated. This can happen when you directly set the count property like this.count = newValue, or indirectly when you call methods like _increment() or _decrement() which in turn modify the count property.
  set count(value) {
    if (value < 0) return;
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
        <button id="increment">+</button>
        <button id="decrement">-</button>
      </div>
    `;

    // Now that the button is part of the DOM, we can safely attach the event listener
    // When you pass a method like _increment as a callback function to an event listener, the context (this keyword) inside that method changes. By default, within the event listener, this refers to the DOM element that triggered the event, not the instance of the class where the method belongs
    // this.shadowRoot.querySelector('#increment').addEventListener('click', this._increment.bind(this));
    // this.shadowRoot.querySelector('#decrement').addEventListener('click', this._decrement.bind(this));

    // Alternatively, you could also achieve the same result by using arrow functions, which inherit the context (this) from their lexical scope
    // With arrow functions, you don't need to explicitly bind the context because they capture the this value from the surrounding code
    this.shadowRoot.querySelector('#increment').addEventListener('click', () => this._increment());
    this.shadowRoot.querySelector('#decrement').addEventListener('click', () => this._decrement());

  }
}

customElements.define('counter-component', CounterComponent);
