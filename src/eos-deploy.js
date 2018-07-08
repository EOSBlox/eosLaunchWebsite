import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './components/the-header.js';

class EosDeploy extends PolymerElement {
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
        color="80BA68" 
        title="Deploy Contract" 
        sub-title="Deploy a contract to the specified account">
      </the-header>
    `;
  }
}

window.customElements.define('eos-deploy', EosDeploy);
