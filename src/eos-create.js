import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './components/the-header.js';

class EosCreate extends PolymerElement {
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
        color="FAAF40" 
        title="Create Account" 
        sub-title="Create an account for yourself or for a contract">
      </the-header>

      <div class="top-color">
      </div>
    `;
  }
}

window.customElements.define('eos-create', EosCreate);
