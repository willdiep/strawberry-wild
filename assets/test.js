import { LitElement, html } from 'lit';

// Define the custom element name
@customElement('my-greeting')
export class MyGreeting extends LitElement {
  // Render the template with "Hello world!" message
  render() {
    return html`
      <h1>Hello world!</h1>
    `;
  }
}
