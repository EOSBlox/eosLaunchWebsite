import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './components/the-header.js';

class EosCall extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 0px;
        }
      </style>

      <the-header 
        class="the-header" 
        color="3D6D9A" 
        title="Call Contract" 
        sub-title="Interact with a contract from the browser">
      </the-header>
    `;
  }
}

window.customElements.define('eos-call', EosCall);
