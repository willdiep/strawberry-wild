import { LitElement, html } from 'lit';

class MyHelloWorld extends LitElement {
  static get properties() {
    return {
      message: { type: String },
    };
  }

  static get styles() {
    return html`
      h1 {
        font-family: sans-serif;
      }
    `;
  }

  constructor() {
    super();
    this.message = 'Hello World!';
  }

  render() {
    return html`
      <h1>${this.message}</h1>
    `;
  }
}

customElements.define('my-hello-world', MyHelloWorld);